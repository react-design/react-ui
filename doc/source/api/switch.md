---
title: Switch 开关
type: api
order: 4
---

## 默认（default）
{% raw %}
    <div class="comp-switch" id="switch_ex1"></div>
{% endraw %}

*源码*

    <Switch/>

## 小尺寸（small）
{% raw %}
    <div class="comp-switch" id="switch_ex2"></div>
{% endraw %}

*源码*

    <Switch size="small"/>


## 设置文字/图标

{% raw %}
    <div class="comp-switch" id="switch_ex3"></div>
{% endraw %}

*源码*

    



{% raw %}
    <script type="text/babel">
        var Switch = require('fui').Switch;

        ReactDOM.render(
            <div>
                <Switch/>
            </div>,
            document.getElementById('switch_ex1')
        );
        ReactDOM.render(
            <div>
               <Switch size="small"/>
            </div>,
            document.getElementById('switch_ex2')
        );
        console.log('2123');
        ReactDOM.render(
            <div>
                <Switch size="normal" checkedChildren="on" uncheckedChildren="off"></Switch>
            </div>,
            document.getElementById('switch_ex3')
        );
    </script>
{% endraw %}