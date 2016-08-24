---
title: Button 按钮
type: api
order: 2
---
{% raw %}
    <script type="text/javascript"> pageName = 'button'; </script>
{% endraw %}

## 默认（default）

{% raw %}
    <div class="comp-button" id="button_ex1"></div>
{% endraw %}

*源码*
```
<Button >default</Button>
<Button type="info">info</Button>
<Button type="primary">primary</Button>
<Button type="warn">warn</Button>
<Button type="danger">danger</Button>
```

## 空

{% raw %}
    <div class="comp-button" id="button_ex2"></div>
{% endraw %}

*源码*
```
<Button plain>default</Button>
<Button plain type="info">info</Button>
<Button plain type="primary">primary</Button>
<Button plain type="warn">warn</Button>
<Button plain type="danger">danger</Button>
```

## 图标

{% raw %}
    <div class="comp-button" id="button_ex3"></div>
{% endraw %}

*源码*
```
<Button icon="fi-left-open f-left">default</Button>
<Button icon="fi-right-open f-right">default</Button>
<Button icon="fi-spin animate-spin" type="primary">primary</Button>
<Button icon="fi-spin2 animate-spin" type="primary">primary</Button>
<Button icon="fi-attention" type="warn">warn</Button>
<Button icon="fi-home" type="danger">danger</Button>
```

## 块

{% raw %}
    <div class="comp-button" id="button_ex4"></div>
{% endraw %}

*源码*
```
<Button block>default</Button>
<Button block type="info">info</Button>
<Button block type="primary">primary</Button>
<Button block type="warn">warn</Button>
<Button block type="danger">danger</Button>
```

## 禁用

{% raw %}
    <div class="comp-button" id="button_ex5"></div>
{% endraw %}

*源码*
```
<Button disabled="true">default</Button>
<Button disabled type="info">info</Button>
<Button disabled type="primary">primary</Button>
<Button disabled type="warn">warn</Button>
<Button disabled type="danger">danger</Button>
```

## 小尺寸

{% raw %}
    <div class="comp-button" id="button_ex6"></div>
{% endraw %}

*源码*
```
<Button small>default</Button>
<Button small type="info">info</Button>
<Button small type="primary">primary</Button>
<Button small type="warn">warn</Button>
<Button small type="danger">danger</Button>
```

## API

通过设置 Button 的属性来产生不同的按钮样式

属性如下：

| 属性        | 说明           | 类型  | 默认值  |
| ---- | ------------- | ----- | ----- |
| type     | 可选值为：default、info、primary、warn、danger | string | default（不填也为default）|
| plain    | 设置按钮是否为简单按钮      | string或空 | 增加plain属性时有效 |
| icon | 设置按钮的图标     |    string | '' |
| block | 设置按钮是否为块级      |    string或空 | 增加block属性时有效 |
| disabled | 设置按钮是否被禁用      |    string或空 | 增加disabled属性时有效 |
| small | 设置按钮是否为小型按钮      |    string或空 | 增加small属性时有效 |

