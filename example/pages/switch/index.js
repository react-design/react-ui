"use strict";

import React from 'react';
import {Switch} from '../../../src/index';
import Page from '../../component/page';
import './switch.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Page className="button" title="Button" spacing>
              <div>
                <Switch/>
              </div>
              <div>
                <Switch size="small"/>
              </div>
              <div>
                <Switch size="normal" checked="false"/>
              </div>
              <div>
                <Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
              </div>
              <div>
                <Switch size="normal" checked="false" checkedChildren="开" uncheckedChildren="关"/>
              </div>
              <div>
                <Switch size="normal" checked="false" disabled="true" uncheckedChildren="关"/> 
              </div>
              <div>
                <Switch size="small" checked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
              </div>
            </Page>
        );
    }
};
