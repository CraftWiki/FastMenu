# Setting.yml
```yml
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
# 是否启用代理端模式
proxyServer: false
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