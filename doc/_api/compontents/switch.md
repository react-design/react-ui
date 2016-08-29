---
title: Switch 开关
type: api
order: 5
---
{% raw %} <script type="text/javascript"> pageName = 'switch'; </script> {% endraw %}
## 默认
<div class="comp-switch" id="switch_ex1"></div>
*源码*
``` html
<Switch/>
```

## 小尺寸（small）
<div class="comp-switch" id="switch_ex2"></div>
*源码*
``` html
<Switch size="small"/>
```
## 设置文字/图标
<div class="comp-switch" id="switch_ex3"></div>
*源码*
``` html
<Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
<Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="normal" defaultChecked="false" checkedChildren=<Icon className="aa"/> uncheckedChildren=<Icon className="aa"/>/>
```

## 禁用（disabled）
<div class="comp-switch" id="switch_ex4"></div>
*源码*
``` html
<Switch size="normal" defaultChecked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="small" defaultChecked="false" disabled="true"/>
```

## onChange事件
<div class="comp-switch" id="switch_ex5"></div>
*源码*
``` html
<Switch size="normal" onChange={(e)=>this.handleChange(e)} defaultChecked="false"/>
```
