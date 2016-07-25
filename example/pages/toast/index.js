"use strict";

import React from 'react';
import {Icon,Toast} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './styles.less';

export default class ToastDemo extends React.Component {

    render() {
        return (
            <Page className="toast-layout" title="Toast" spacing>
            	<Title text="All"></Title>
              <Icon value="fi-ok"></Icon>
              <Toast show={true} icon="fi-ok">
              	123
              </Toast>
            </Page>
        );
    }
};
