---
title: Grid 栅格
type: api
order: 4
---
{% raw %} <script type="text/javascript"> pageName = 'grid'; </script> {% endraw %}
## flex-等分
<div class="comp-grid" id="grid_ex1"></div>
*源码*
``` html
<Row>
    <Col>1/1</Col>
</Row>
<Row>
    <Col>1/2</Col>
    <Col>1/2</Col>
</Row>
```

## flex-自定义
<div class="comp-grid" id="grid_ex2"></div>
*源码*
``` html
<Row>
    <Col flex="1">1/3</Col>
    <Col flex="2">2/3</Col>
</Row>
<Row>
    <Col flex="1">1/4</Col>
    <Col flex="1">1/4</Col>
    <Col flex="2">2/4</Col>
</Row>
```

## 左固定-右适应
<div class="comp-grid" id="grid_ex3"></div>
*源码*
``` html
<Row>
    <ColHead width="100">width:100px</ColHead>
    <ColBody>auto</ColBody>
</Row>
```

## 左适应-右固定
<div class="comp-grid" id="grid_ex4"></div>
*源码*
``` html
<Row>
    <ColBody>auto</ColBody>
    <ColFoot width="100">width:100px</ColFoot>
</Row>
```

## 三列布局
<div class="comp-grid" id="grid_ex5"></div>
*源码*
``` html
<Row>
    <ColHead width="100">width:100px</ColHead>
    <ColBody>auto</ColBody>
    <ColFoot width="100">width:100px</ColFoot>
</Row>
```
