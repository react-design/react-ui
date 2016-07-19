"use strict";

import React from 'react';
import {Button} from '../../../src/index';
import Page from '../../component/page';
import './button.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Page className="button" title="Button" spacing>
                <Button>按钮</Button>
            </Page>
        );
    }
};