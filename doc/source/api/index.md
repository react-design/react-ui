---
title: Fruit - ui
type: api
order: 0
---

## 介绍

Based on the react to maintain a set of ionic style of reusable component library

### 示例
![二维码扫一扫][1]
[在线demo][2]

### 特性
- 基于react维护的一套ionic风格的可复用组件库
- 组件简洁，易于组合

### 版本

- 开发版 [![npm version](https://img.shields.io/npm/v/fruit-ui.svg?style=flat)](https://www.npmjs.com/package/fruit-ui)

### 兼容性

- 谷歌浏览器
- Safari

### 链接

- Button 按钮
- Icon 图标
- Grid 栅格布局
- Switch 开关
- Dialog 对话
- Toast
- SearchBar 搜索框
- Carousel 轮播图
- ActionSheet

[1]: https://cloud.githubusercontent.com/assets/9276376/17802302/06531f8a-6622-11e6-8346-4de63e5ebb36.png
[2]: http://demo.react-d.com/



## 快速入门

### 使用npm安装
``` bash
npm install fruit-ui
```

### 使用组件
``` js
import {Button} from 'fruit-ui';
ReactDOM.render(<Button />, node);
```

### 浏览器引入
在index.html中，引入f-ui.css
``` js
import 'dist/fruit-ui.css';
```

## Button 按钮

### 默认（default）
<div class="comp-button" id="button_ex1"></div>

*源码*

``` js
<Button >default</Button>
<Button type="info">info</Button>
<Button type="primary">primary</Button>
<Button type="warn">warn</Button>
<Button type="danger">danger</Button>
```


### 空（plain）
<div class="comp-button" id="button_ex2"></div>

*源码*

``` js
<Button plain>default</Button>
<Button plain type="primary">primary</Button>]
```

### 图标
<div class="comp-button" id="button_ex3"></div>

*源码*

``` js
<Button icon="fi-left-open f-left">default</Button>
<Button icon="fi-right-open f-right">default</Button>
<Button icon="fi-spin animate-spin" type="primary">primary</Button>
<Button icon="fi-spin2 animate-spin" type="primary">primary</Button>
```


### 块
<div class="comp-button" id="button_ex4"></div>

*源码*

``` js
<Button block>default</Button>
<Button block type="primary">primary</Button>
```

### 禁用
<div class="comp-button" id="button_ex5"></div>

*源码*

``` js
<Button disabled="true">default</Button>
<Button disabled type="primary">primary</Button>
```

### 小尺寸
<div class="comp-button" id="button_ex6"></div>

*源码*

``` js
<Button small>default</Button>
<Button small type="primary">primary</Button>
```





## Icon 图标

### 如何使用

``` js
<Icon value="fi-ok"></Icon>
```

加入 animate-spin 可以使图标旋转

``` js
<Icon value="fi-spin animate-spin"></Icon>
```
例子：
<div class="comp-icon" id="icon_ex1"></div>



## Switch 开关

### 默认

<div class="comp-switch" id="switch_ex1"></div>

*源码*
``` html
<Switch/>
```

### 小尺寸（small）
<div class="comp-switch" id="switch_ex2"></div>

*源码*

``` html
<Switch size="small"/>
```
### 设置文字/图标

<div class="comp-switch" id="switch_ex3"></div>

*源码*

``` html
<Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
<Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="normal" defaultChecked="false" checkedChildren=<Icon className="aa"/> uncheckedChildren=<Icon className="aa"/>/>
```

### 禁用（disabled）

<div class="comp-switch" id="switch_ex4"></div>

*源码*

``` html
<Switch size="normal" defaultChecked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
<Switch size="small" defaultChecked="false" disabled="true"/>
```

### onChange事件

<div class="comp-switch" id="switch_ex5"></div>

*源码*

``` html
<Switch size="normal" onChange={(e)=>this.handleChange(e)} defaultChecked="false"/>
```

## Grid（格珊）

### flex-等分

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
<Row>
    <Col>1/3</Col>
    <Col>1/3</Col>
    <Col>1/3</Col>
</Row>
<Row>
    <Col>1/4</Col>
    <Col>1/4</Col>
    <Col>1/4</Col>
    <Col>1/4</Col>
</Row>
```

### flex-自定义

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

### 左固定-右适应

<div class="comp-grid" id="grid_ex3"></div>

*源码*

``` html
<Row>
    <ColHead width="100">width:100px</ColHead>
    <ColBody>auto</ColBody>
</Row>
<Row>
    <ColHead width="200">width:200px</ColHead>
    <ColBody>auto</ColBody>
</Row>
```

### 左适应-右固定

<div class="comp-grid" id="grid_ex4"></div>

*源码*
``` html
<Row>
    <ColBody>auto</ColBody>
    <ColFoot width="100">width:100px</ColFoot>
</Row>
<Row>
    <ColBody>auto</ColBody>
    <ColFoot width="200">width:200px</ColFoot>
</Row>
```


### 三列布局
<div class="comp-grid" id="grid_ex5"></div>

*源码*

``` html
<Row>
    <ColHead width="100">width:100px</ColHead>
    <ColBody>auto</ColBody>
    <ColFoot width="100">width:100px</ColFoot>
</Row>
```

## SearchBar（搜索框）

### 默认

<div class="comp-search" id="search_ex1"></div>

*源码*

``` html
<SearchBar></SearchBar>
```

### 变化时的回调

<div class="comp-search" id="search_ex2"></div>

*源码*

``` html
<SearchBar placeholder="输入搜索内容" onChange={(value) => this.changeDemo(value)} button="false"></SearchBar>
```

### 搜索时的回调

<div class="comp-search" id="search_ex3"></div>

*源码*

``` html
<SearchBar placeholder="输入搜索内容" onSearch={(value) => this.searchDemo(value)}></SearchBar>
```


## Toast 提示

<div class="comp-toast" id="toast_ex1"></div>

*源码*

``` js
React.createClass({
  getInitialState: function() {
    return {show_top: false, show_normal:false};
  },
  topShowHandle: function() {
    var self = this;
    self.setState({show_top: true});
    setTimeout(function(){self.setState({show_top: false}); },2000);
  },
  normalShowHandle: function() {
    var self = this;
    self.setState({show_normal: true});
    setTimeout(function(){self.setState({show_normal: false}); },2000);
  },
  render: function() {
      return (
      <div>
        <Button onClick={this.normalShowHandle}>正常提示</Button>
        <Button type="primary" onClick={this.topShowHandle}>顶部提示</Button>
        <Toast show={this.state.show_normal} icon="fi-spin animate-spin"> 正在加载中... </Toast>
        <Toast show={this.state.show_top} icon="fi-attention" iconColor="#04be02" type="top" > 顶部成功 </Toast>
      </div>
    );
  }
});
```

## Message 提示

<div class="comp-toast" id="message_ex"></div>

*源码*

``` js
var loadingHide , loadingBlockHide ;
React.createClass({
  loadingHandle: function(show) {
    if(show){
      if(!loadingBlockHide){loadingBlockHide = Message.loading('正在加载中...'); }
    }else{
      loadingBlockHide();
      loadingBlockHide = null;
    }
  },
  loadingBlockHandle: function(show) {
    if(show){
      if(!loadingBlockHide){loadingBlockHide = Message.loading('正在加载中...',{type:'block'}); }
    }else{
      loadingBlockHide();
      loadingBlockHide = null;
    }
  },
  showHandle: function(arg) {
    Message[arg.type](arg.text,{type : arg.showType});
  },
  render: function() {
    return (
      <div>
        <h3>方框提示</h3>
        <Button onClick={this.showHandle.bind(this,{type:'info' ,showType:'block' ,text:'这是一条提示'})}>正常提示</Button>
        <Button type="primary" onClick={this.loadingBlockHandle.bind(this,true)}>loading-show</Button>
        <Button type="info" onClick={this.loadingBlockHandle.bind(this,false)}>loading-hide</Button>
        <h3>文字提示</h3>
        <Button type="primary" onClick={this.showHandle.bind(this,{type:'info',text:'这是一条提示'})}>正常提示</Button>
        <Button type="warn" onClick={this.loadingHandle.bind(this, true)}>loading-show</Button>
        <Button type="danger" onClick={this.loadingHandle.bind(this, false)}>loading-hide</Button>
      </div>
    );
  }
});
```


## Dialog（对话框）

<div class="comp-toast" id="dialog_ex"></div>

*源码*


``` html
React.createClass({
  getInitialState: function() {return {show1 : false, show2 : false, show3 : false} }
  dialogClickHandle : function(number){
    var sets = {};
    sets['show'+number] = !this.state['show'+number];
    this.setState(sets);
  },
  dialogOnCancel : funciton(number){
    var sets = {};
    sets['show'+number] = false;
    this.setState(sets);
  },
  render: function() {
    var states = this.state;
    var eventOnCancel = this.onCancel;
    return (<div>
      <Button type="info" onClick={this.dialogClickHandle.bind(this ,1)}>1个按钮</Button>
      <Button type="warn" onClick={this.dialogClickHandle.bind(this ,2)}>3个按钮+自定义按钮颜色</Button>
      <Button type="primary" onClick={this.dialogClickHandle.bind(this ,3)}>含标题</Button>
      <Dialog show={states.show1} onOk={eventOnCancel.bind(this,1)} > 确认要提交吗 </Dialog>
      <Dialog show={states.show2} footer={[{text:'取消',onClick:eventOnCancel.bind(this,2) ,color:'black'}, {text:'保存草稿',onClick:eventOnCancel.bind(this,2)}, {text:'提交',onClick:eventOnCancel.bind(this,2)}]} >
        <p>我的测试</p>
      </Dialog>
      <Dialog show={states.show3} title="请求确认" onOk={eventOnCancel.bind(this,3)} > 确认要提交吗？ </Dialog>
    </div>);
  } });
```

## ActionSheet

<div class="comp-actionSheet" id="actionSheet_ex"></div>

*源码*

``` js
React.createClass({
  getInitialState: function() {
    return {show1 : false}
  },
  handleClick : function(){
    this.state.show1 ? this.setState({show1:false}) : this.setState({show1:true})
  },
  onCancel : function(number){
    this.setState({show1:false})
  },
  clickA : function(){
    alert('您点击了第一个按钮');
  },
  render: function() {
    return (<div>
        <Button type="primary" onClick={this.handleClick} block>actionSheet</Button>
        <ActionSheet show={this.state.show1} onRequestClose={this.onCancel}>
          <ul>
            <li onClick={this.clickA}>alert</li>
            <li> <a href="tel:4008123123">订餐电话</a> </li>
            <li onClick={this.onCancel}>取消</li>
          </ul>
        </ActionSheet>
    </div> );
  }
});
```
