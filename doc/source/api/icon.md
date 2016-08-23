---
title: Icon 图标
type: api
order: 3
---

## 如何使用

    <Icon value="fi-ok"></Icon>

加入`animate-spin`可以使图标旋转

    <Icon value="fi-spin animate-spin"></Icon>

例子：

{% raw %}
    <div class="comp-icon" id="icon_ex1"></div>
    <script type="text/babel">
        var Icon = require('fui').Icon;

        ReactDOM.render(
            <div>
                <Icon value="fi-spin animate-spin"></Icon>
                <h2>All Icon</h2>
                <ul>
                    <li>
                        <Icon value="fi-ok"></Icon>
                        <code>fi-ok</code>
                    </li>
                    <li>
                        <Icon value="fi-close"></Icon>
                        <code>fi-close</code>
                    </li>
                    <li>
                        <Icon value="fi-attention"></Icon>
                        <code>fi-attention</code>
                    </li>
                    <li>
                        <Icon value="fi-dot"></Icon>
                        <code>fi-dot</code>
                    </li>
                    <li>
                        <Icon value="fi-down"></Icon>
                        <code>fi-down</code>
                    </li>
                    <li>
                        <Icon value="fi-left"></Icon>
                        <code>fi-left</code>
                    </li>
                    <li>
                        <Icon value="fi-right"></Icon>
                        <code>fi-right</code>
                    </li>
                    <li>
                        <Icon value="fi-up"></Icon>
                        <code>fi-up</code>
                    </li>
                    <li>
                        <Icon value="fi-spin"></Icon>
                        <code>fi-spin</code>
                    </li>
                    <li>
                        <Icon value="fi-spin2"></Icon>
                        <code>fi-spin2</code>
                    </li>
                    <li>
                        <Icon value="fi-home"></Icon>
                        <code>fi-home</code>
                    </li>
                    <li>
                        <Icon value="fi-down-open"></Icon>
                        <code>fi-down-open</code>
                    </li>
                    <li>
                        <Icon value="fi-up-open"></Icon>
                        <code>fi-up-open</code>
                    </li>
                    <li>
                        <Icon value="fi-right-open"></Icon>
                        <code>fi-right-open</code>
                    </li>
                    <li>
                        <Icon value="fi-left-open"></Icon>
                        <code>fi-left-open</code>
                    </li>
                    <li>
                        <Icon value="fi-search"></Icon>
                        <code>fi-search</code>
                    </li>
                    <li>
                        <Icon value="fi-help-circled"></Icon>
                        <code>fi-help-circled</code>
                    </li>
                    <li>
                        <Icon value="fi-ok-circled"></Icon>
                        <code>fi-ok-circled</code>
                    </li>
                    <li>
                        <Icon value="fi-cancel-circled"></Icon>
                        <code>fi-cancel-circled</code>
                    </li>
                    <li>
                        <Icon value="fi-info-circled"></Icon>
                        <code>fi-info-circled</code>
                    </li>
                    <li>
                        <Icon value="fi-menu"></Icon>
                        <code>fi-menu</code>
                    </li>
                </ul>
            </div>,
            document.getElementById('icon_ex1')
        );
    </script>
{% endraw %}