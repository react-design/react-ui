"use strict";

import React from 'react';
import {Button} from '../../../src/index';
import Page from '../../component/page';
import './button.less';

export default class ButtonDemo extends React.Component {

    render() {
        return (
            <Page className="button" title="Button" spacing>

                <Button>default</Button><br/>
                <Button type="info">info</Button><br/>
                <Button type="primary">primary</Button><br/>
                <Button type="warn">warn</Button><br/>
                <Button type="danger">danger</Button><br/>
                <hr/><br/>
                <Button plain>default</Button><br/>
            </Page>
        );
    }
};