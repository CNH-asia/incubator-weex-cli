const childprocess = require('child_process')
const path = require('path')

import processManage from '../utils/process'
import { Devices } from '../base/devices'
import { DeviceInfo, RunDeviceOptions } from '../common/device'

const { execSync } = childprocess

export default class IosDevices extends Devices {
  constructor() {
    super({ type: Devices.TYPES.ios })
  }

  updateList() {
    this.list = []
    this.concat(this.getIosDevicesList())
  }

  private getIosDevicesList(): Array<DeviceInfo> {
    // Doctor TODO `xcrun`
    const text = processManage.runAndGetOutput('xcrun instruments -s devices')
    const devices = []
    const REG_DEVICE = /(.*?) \((.*?)\) \[(.*?)]/

    const lines = text.split('\n')
    for (const line of lines) {
      if (line.indexOf('Watch') >= 0 || line.indexOf('TV') >= 0 || line.indexOf('iPad') >= 0) {
        continue
      }
      const device = line.match(REG_DEVICE)
      if (device !== null) {
        const name = device[1]
        const version = device[2]
        const id = device[3]
        const isSimulator = line.indexOf('Simulator') >= 0 || id.indexOf('-') >= 0
        devices.push({ name, version, id, isSimulator })
      }
    }

    return devices
  }

  async launchById(id: DeviceInfo['id']): Promise<String> {
    try {
      childprocess.execSync(`xcrun instruments -w ${id}`, { encoding: 'utf8' })
    } catch (error) {
      if (error) {
        if (error.toString().indexOf('Instruments Usage Error') !== -1) {
          // instruments always fail with 255 because it expects more arguments,
          // but we want it to only launch the simulator
          return
        }
        throw error
      }
    }
  }

  async run(options: RunDeviceOptions) {
    const deviceInfo = this.getDeviceById(options.id)

    if (!deviceInfo) {
      throw new Error(`Not find device ${options.id}`)
    }
    try {
      await this.launchById(options.id)
    } catch (e) {
      throw new Error(`Launch fail ${options.id}`)
    }

    if (deviceInfo.isSimulator) {
      try {
        execSync(`xcrun simctl install ${options.id} ${options.appPath}`)
      } catch (e) {
        throw new Error(`Instll app fail`)
      }
      if (options.applicationId) {
        try {
          execSync(`xcrun simctl launch ${options.id} ${options.applicationId}`)
        } catch (e) {
          throw new Error(`launch app fail`)
        }
      }
    } else {
      // Build to iphone the xxx.app must signed
      const iosDeployPath = path.join(__dirname, '../../node_modules/ios-deploy/build/Release/ios-deploy')
      try {
        execSync(`${iosDeployPath} --justlaunch --debug --id ${options.id} --bundle ${options.appPath}`)
      } catch (e) {
        throw e
      }
    }
  }
}