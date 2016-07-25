"use strict";

import React from 'react';
import {Switch} from '../../../src';
import {Icon} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './switch.less';

export default class ButtonDemo extends React.Component {
    state = {
      switched: 'false'
    };
    handleChange = (e) => {
      this.setState({switched: e.checked.toString()})
    }
    render() {
        return (
            <Page className="switch" title="switch" spacing>
              <Title text="默认（default）" first></Title>
              <Switch/>

              <Title text="小尺寸（small）" first></Title>
              <Switch size="small"/>

              <Title text="设置文字/图标" first></Title>
              <Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
              <Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/>
              <Switch size="normal" defaultChecked="false" checkedChildren=<Icon className="aa"/> uncheckedChildren=<Icon className="aa"/>/>

              <Title text="禁用（disabled）" first></Title>
              <Switch size="normal" defaultChecked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
              <Switch size="small" defaultChecked="false" disabled="true"/>

              <Title text="onChange事件" first></Title>
              <Switch size="normal" onChange={(e)=>this.handleChange(e)} defaultChecked="false"/>
              <div className="showCb">
                当前状态是：{this.state.switched}
              </div>
            </Page>
        );
    }
};
