# Script
> [!WARNING]
> 在1.20以上的版本，fmenu已不再支持JavaScript脚本！这是一个BUG导致的问题，作者也不知道为什么。
Fmenu支持JavaScript脚本
示例：
```yaml
guide: false
maker: lao_wang
model: ItemName
calculation: false
h: 5
w: 9
title: ExampleScriptMenu
enable: true
'22':
  script:
    - 'print(getPlayerOpenInventory.getTitle());'#向后台打印GUI标题
    - 'print(getPlayerInventory.addItem(getOpenInventory.getItem(22)));'#向玩家背包添加22号槽位的物品
  item: BEETROOT
  name: ''#留空则显示物品本身名称
  mount: 1
```
