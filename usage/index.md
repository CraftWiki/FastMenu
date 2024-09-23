# 快速入门
## 下载并安装（单端）
请点[这里](https://github.com/YYDSQAQ1024/FastMenu/releases/download/Installer/fmenu-Installer.jar)下载FastMenu的安装插件，将其放置在Plugins目录下，首先重启一遍，在服务器加载完毕（有Done字样）时再重启，此时，您的FastMenu应该已经安装好了。
## 创建一个菜单
在游戏内执行/fmenu edit，点击**绿色混凝土**开始菜单创建引导，随后，根据引导创建菜单即可。
## 打开您的菜单
在游戏内执行/fmenu open 菜单名，即可打开您创建的菜单。
## 编辑菜单
在游戏内执行/fmenu list，随后，按下Shift+鼠标左键点击要编辑的菜单，即可编辑您创建的菜单。

## 下载并安装（跨服/代理端）
请点[这里](https://github.com/YYDSQAQ1024/FastMenu/releases/download/Installer/fmenu-Installer.jar)下载FastMenu的安装插件，将其放置在**子服的**Plugins目录下，首先重启一遍，在服务器加载完毕（有Done字样）时再重启，随后执行下面的操作。
### BungeeCord
点[这里](https://github.com/YYDSQAQ1024/FastMenu/releases/download/2.7.5/fmenu-bungeecord-1.0.jar)下载FastMenu的BungeeCord插件，将其放置在**代理端的**plugins目录下，重启服务器即可。
### Velocity
- 第一步
前往[这里](https://hangar.papermc.io/Phoenix616/Snap)下载Snap插件，将其放置在**代理端的**plugins目录下，重启服务器。
- 第二步
点[这里](https://github.com/YYDSQAQ1024/FastMenu/releases/download/2.7.5/fmenu-bungeecord-1.0.jar)下载FastMenu的BungeeCord插件，将其放置在**代理端的**plugins/snap/plugins目录下，重启服务器。

随后，打开**子服的**plugins目录下以fmenu开头的文件夹，修改其中的**setting.yml**文件为下面内容：
```yaml
#           _   _   _
#          | | | | (_)
#  ___  ___| |_| |_ _ _ __   __ _
# / __|/ _ \ __| __| | '_ \ / _` |
# \__ \  __/ |_| |_| | | | | (_| |
# |___/\___|\_`_|\__|_|_| |_|\__, |
#                            __/ |
#                           |___/

# 不支持支持铁砧界面的版本。
# 非必要请不要修改！
unSupportVersions:
- 1.7.3
- 1.7.2
- 1.7.1
RandomID: false
DeBugMode: false
proxyServer: true
UseSystemItemList: true

# 擅自修改可能会导致财产损失！后果自负！
# Only works when DeBugMode is active
RemoteDeBug:
  port: 8888
  host: debug.api.fmenu.ngup.eu.org

# 权限设置
# allow类型：op,not_op,true,false,default
# op：管理员可用
# not_op：非管理员可用
# true：所有人可用
# false：所有人不可用
# default：使用权限插件进行分配
# 玩家打开界面的权限
permission:
  # 是否允许非OP玩家删除自己的菜单
  CanDeleteOwnInventory: true
  # 玩家打开菜单的权限
  OpenInventory:
    allow: 'true'
  # fm.action.open
  # 玩家关闭界面的权限
  CloseInventory:
    allow: 'true'
  # fm.action.close
  # 玩家编辑界面的权限
  EditInventory:
    allow: op
  # fm.action.edit
  # 玩家删除界面的权限
  DeleteInventory:
    allow: op
  # fm.action.delete
  # 玩家使用主指令的权限
  UseMainCommand:
    allow: 'true'
# fm.cmd.main

# ####自定义权限#####
# 示例：
# me^menu^example: 'true'
# 注：权限的"."用"^"代替

# 插件设置
setting:
  # 是否使用下方API地址
  UseConfigURL: false
  # API地址
  API-URL: http://baidu.com/
  # 是否在自动检查更新
  check-update: true
  # 玩家最多可创建菜单的数量(OP不算)
  PlayerMaxCreate: 10
  
  
  menu:
    # 菜单列表的长度，计算方法：菜单行数 x 9
    # 默认6行，最大6行
    size: 54
    # 用来展示菜单文件的槽位。分隔符请使用","
    show: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34,37,38,39,40,41,42,43
```
此时，您的FastMenu跨服端已安装完成。