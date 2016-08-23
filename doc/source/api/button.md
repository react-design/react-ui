---
title: Button 按钮
type: api
order: 2
---


## 默认（default）

{% raw %}
    <div class="comp-button" id="button_ex1"></div>
{% endraw %}

*源码*

	<Button >default</Button>
    <Button type="info">info</Button>
    <Button type="primary">primary</Button>
    <Button type="warn">warn</Button>
    <Button type="danger">danger</Button>

## 空

{% raw %}
    <div class="comp-button" id="button_ex2"></div>
{% endraw %}

*源码*

	<Button plain>default</Button>
    <Button plain type="info">info</Button>
    <Button plain type="primary">primary</Button>
    <Button plain type="warn">warn</Button>
    <Button plain type="danger">danger</Button>


## 图标

{% raw %}
    <div class="comp-button" id="button_ex3"></div>
{% endraw %}

*源码*

	<Button icon="fi-left-open f-left">default</Button>
    <Button icon="fi-right-open f-right">default</Button>
    <Button icon="fi-spin animate-spin" plain type="info">info</Button>
    <Button icon="fi-spin2 animate-spin" block type="primary">primary</Button>
    <Button icon="fi-attention" disabled type="warn">warn</Button>
    <Button icon="fi-home" small type="danger">danger</Button>


## 块

{% raw %}
    <div class="comp-button" id="button_ex4"></div>
{% endraw %}

*源码*

	<Button block>default</Button>
    <Button block type="info">info</Button>
    <Button block type="primary">primary</Button>
    <Button block type="warn">warn</Button>
    <Button block type="danger">danger</Button>


## 禁用

{% raw %}
    <div class="comp-button" id="button_ex5"></div>
{% endraw %}

*源码*

	<Button disabled>default</Button>
    <Button disabled type="info">info</Button>
    <Button disabled type="primary">primary</Button>
    <Button disabled type="warn">warn</Button>
    <Button disabled type="danger">danger</Button>


## 小尺寸

{% raw %}
    <div class="comp-button" id="button_ex6"></div>
{% endraw %}

*源码*

	<Button small>default</Button>
    <Button small type="info">info</Button>
    <Button small type="primary">primary</Button>
    <Button small type="warn">warn</Button>
    <Button small type="danger">danger</Button>


{% raw %}
    <script type="text/babel">
        var Button = require('fui').Button;
        ReactDOM.render(
            <div>
                <Button >default</Button>
                <Button type="info">info</Button>
                <Button type="primary">primary</Button>
                <Button type="warn">warn</Button>
                <Button type="danger">danger</Button>
            </div>,
            document.getElementById('button_ex1')
        );
        ReactDOM.render(
            <div>
                <Button plain>default</Button>
                <Button plain type="info">info</Button>
                <Button plain type="primary">primary</Button>
                <Button plain type="warn">warn</Button>
                <Button plain type="danger">danger</Button>
            </div>,
            document.getElementById('button_ex2')
        );
        ReactDOM.render(
            <div>
                <Button icon="fi-left-open f-left">default</Button>
                <Button icon="fi-right-open f-right">default</Button>

            </div>,
            document.getElementById('button_ex3')
        );
        ReactDOM.render(
            <div>
                <Button block>default</Button>
                <Button block type="info">info</Button>
                <Button block type="primary">primary</Button>
                <Button block type="warn">warn</Button>
                <Button block type="danger">danger</Button>
            </div>,
            document.getElementById('button_ex4')
        );
        ReactDOM.render(
            <div>
                <Button disabled="true">default</Button>
            </div>,
            document.getElementById('button_ex5')
        );
        ReactDOM.render(
            <div>
                <Button small>default</Button>
                <Button small type="info">info</Button>
                <Button small type="primary">primary</Button>
                <Button small type="warn">warn</Button>
                <Button small type="danger">danger</Button>
            </div>,
            document.getElementById('button_ex6')
        );
    </script>
{% endraw %}





