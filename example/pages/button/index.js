"use strict";

import React from 'react';
import {Button} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './button.less';

export default class ButtonDemo extends React.Component {
    constructor(props) {
      super(props);
    
      
    }

    testClick(){
        console.log('test click');
    }


    render() {
        return (
            <Page className="button-layout" title="Button" spacing>
                <Title text="默认（default）" first></Title>
                <Button onClick={this.testClick}>default</Button>
                <Button type="info">info</Button>
                <Button type="primary">primary</Button>
                <Button type="warn">warn</Button>
                <Button type="danger">danger</Button>

                <Title text="空（plain）"></Title>
                <Button plain>default</Button>
                <Button plain type="info">info</Button>
                <Button plain type="primary">primary</Button>
                <Button plain type="warn">warn</Button>
                <Button plain type="danger">danger</Button>

                <Title text="图标（icon）"></Title>
                <Button icon="fi-left-open f-left">default</Button>
                <Button icon="fi-right-open f-right">default</Button>
                <Button icon="fi-spin animate-spin" plain type="info">info</Button>
                <Button icon="fi-spin2 animate-spin" block type="primary">primary</Button>
                <Button icon="fi-attention" disabled type="warn">warn</Button>
                <Button icon="fi-home" small type="danger">danger</Button>

                <Title text="块（block）"></Title>
                <Button block>default</Button>
                <Button block type="info">info</Button>
                <Button block type="primary">primary</Button>
                <Button block type="warn">warn</Button>
                <Button block type="danger">danger</Button>

                <Title text="禁用（disabled）"></Title>
                <Button disabled>default</Button>
                <Button disabled type="info">info</Button>
                <Button disabled type="primary">primary</Button>
                <Button disabled type="warn">warn</Button>
                <Button disabled type="danger">danger</Button>

                <Title text="小尺寸（small）"></Title>
                <Button small>default</Button>
                <Button small type="info">info</Button>
                <Button small type="primary">primary</Button>
                <Button small type="warn">warn</Button>
                <Button small type="danger">danger</Button>
            </Page>
        );
    }
};
