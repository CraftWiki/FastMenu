# 菜单示例
## SimpleForm
这是最简单的菜单，包含按钮和文字控件
```yaml
title: "示例菜单-SimpleForm"
InvType: "SimpleForm"
control:
  Cancel:
    type: "simple"
    text: "取消"
    commands:
      - "console say 玩家取消了表单"
  Confirm:
    type: "simple"
    text: "确认"
    commands:
      - "player say 欢迎 $Test$ 来到服务器"
      - "player say 你选择了 $SelectOption$"
```
> [!TIP]
> $Test$是占位符，它允许你访问菜单内其他控件的值，格式：$<控件名称>$

## CustomForm
这是比SimpleForm更高级的菜单，但是它不支持多个按钮，只有一个提交按钮。
```yaml
title: "示例菜单-CustomForm"
InvType: "CustomForm"
control:
  Test:
    type: "input"
    text: "请输入你的名字"
    placeholder: "玩家名称"
  SelectOption:
    type: "dropdown"
    text: "请选择一个选项"
    options:
      - "选项1"
      - "选项2"
      - "选项3"

  Confirm:
    type: "simple"
    text: "确认"
    commands:
      - "playser say 欢迎 $Test$ 来到服务器"
      - "player say 你选择了 $SelectOption$"
```
> [!IMPORTANT]
> 在CustomForm中，Confirm是提交按钮，其内容无法修改，但可以指定触发效果。

## ModalForm
这是类似于信息弹窗的菜单，它由文本控件和1-2个按钮组成
```yaml
title: "示例菜单-ModalForm"
InvType: "ModalForm"
control:
  Content:
    type: "content"
    text: "文本"
  Button1:
    type: "button1"
    text: "取消"
    commands:
      - "console say 玩家取消了表单"
  Button2:
    type: "button2"
    text: "确认"
    commands:
      - "player say 欢迎 $Test$ 来到服务器"
      - "player say 你选择了 $SelectOption$"
```
