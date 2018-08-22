## Changelog

### 1.3.11
- Upgrade `xtoolkit` to `v1.1.1`.

### 1.3.10
- Upgrade `xtoolkit` to `v1.1.0`.

### 1.3.9
- [issue 435](https://github.com/weexteam/weex-toolkit/issues/435)

### 1.3.8
- Upgrade `xtoolkit` to `v1.0.9`.

### 1.3.7
- Remove useless log message from xtoolkit.

### 1.3.6
- Fixed dns timeout error on xtoolkit.

### 1.3.5
- Add `weex remove` command to remove a package from weex-toolkit.
- Add upgrade notify for weex-toolkit.
- Fixed [issue 373](https://github.com/weexteam/weex-toolkit/issues/373).
- Fixed [issue 363](https://github.com/weexteam/weex-toolkit/issues/363).

### 1.3.4
- Fixed parse error while checking update infomation of the package.
- Upgrade `xtoolkit` to `v1.0.4`.

### 1.3.3
- Fixed `info.version.toString()` throw error on windows.

### 1.3.2
- Upgrade `xtoolkit` to `v1.0.3`.
- Fixed the error of `getaddrinfo ENOTFOUND` cause by no protocol http request.

### 1.3.1
- Reduce the interference caused by the presentation of information.
- Upgrade `weex-builder` to `v0.3.19`.
- Upgrade `weex-previewer` to `v1.5.0`.

### 1.3.0
- Optimized version display interface while running `weex [command] -v`.

### 1.2.10
- Change recommand npm version to 4, cause of the [issues](https://github.com/npm/npm/issues/16991) on npm5.
- Add changelog tips while a package can be upgreaded.

### 1.2.9
- Fix issues [local loader cann't be resolve](https://github.com/weexteam/weex-builder/commit/346f7c37b0032f17b023d80c9e15306764484d23).
- Format the log time to `00:00:00`.
- Optimize the configuration of the write operation.

### 1.2.8
- Fix issues [weexteam/weex-toolkit/issues/251](https://github.com/weexteam/weex-toolkit/issues/251)

### 1.2.7
- Upgrade `xtoolkit` to `0.2.19`.
- Fix issues [weexteam/weex-toolkit/issues/236](https://github.com/weexteam/weex-toolkit/issues/236).

### 1.2.6
- Upgrade `xtoolkit` to `0.2.18`.
- Fix issues [weexteam/weex-toolkit/issues/236](https://github.com/weexteam/weex-toolkit/issues/236).

### 1.2.5
- Fix the path error of `weex-toolkit`.
- Fix issues [weexteam/weex-toolkit/issues/236](https://github.com/weexteam/weex-toolkit/issues/236).
- Add `babel-cli` to compile the source code to ES5 code.

### 1.2.4
- Upgrade `xtoolkit` to `0.2.17`. 
- Fix issues [weexteam/weex-toolkit/issues/236](https://github.com/weexteam/weex-toolkit/issues/236)

### 1.2.3
- Upgrade `xtoolkit` to `0.2.16`. 

### 1.2.1
- Upgrade `xtoolkit` to `0.2.15`.

### 1.2.0
- Add logger setting logic, you can look more detail log by using `--verbose` or `--setloglevel`.
- Upgrade `weex-builder` to `0.3.12`.
- Upgrade `weex-previewer` to `1.4.4`.
- Upgrade `xtoolkit` to `0.2.14`.


### 1.1.0
- Bug fix.
- Support directory hot compile automatically.
- Increased port auto-adaptation & more beautiful log.
- Update weex-loader to v0.5.3.
 
### 1.0.3
- A brand new toolkit release
- Base on xtoolkit which can manager child command
- Auto setup child command if need
- Auto check the version of child command package and upgrade
- Contains weexpack now
- A new weex compiler
- Support vue2.0 
- New preview page