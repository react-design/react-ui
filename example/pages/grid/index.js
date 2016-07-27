"use strict";

import React from 'react';
import {Row,Col,ColHead,ColBody,ColFoot} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './grid.less';

export default class ButtonDemo extends React.Component {
    constructor(props) {
      super(props);
    
      
    }


    render() {
        return (
            <Page className="grid-layout" title="Grid" spacing>
                <Title text="flex-等分" first></Title>
                <Row className="row">
                    <Col className="color-1">1/1</Col>
                </Row>
                <Row className="row">
                    <Col className="color-2">1/2</Col>
                    <Col className="color-3">1/2</Col>
                </Row>
                <Row className="row">
                    <Col className="color-4">1/3</Col>
                    <Col className="color-3">1/3</Col>
                    <Col className="color-5">1/3</Col>
                </Row>
                <Row className="row">
                    <Col className="color-4">1/4</Col>
                    <Col className="color-3">1/4</Col>
                    <Col className="color-1">1/4</Col>
                    <Col className="color-5">1/4</Col>
                </Row>
                <Title text="flex-自定义"></Title>
                <Row className="row">
                    <Col className="color-1" flex="1">1/3</Col>
                    <Col className="color-2" flex="2">2/3</Col>
                </Row>
                <Row className="row">
                    <Col className="color-1" flex="1">1/4</Col>
                    <Col className="color-3" flex="1">1/4</Col>
                    <Col className="color-5" flex="2">2/4</Col>
                </Row>
                <Row className="row">
                    <Col className="color-1" flex="1">1/6</Col>
                    <Col className="color-2" flex="2">2/6</Col>
                    <Col className="color-3" flex="3">3/6</Col>
                </Row>
                <Title text="左固定-右适应"></Title>
                <Row className="row">
                    <ColHead className="color-1" width="100">width:100px</ColHead>
                    <ColBody className="color-2">auto</ColBody>
                </Row>
                <Row className="row">
                    <ColHead className="color-3" width="200">width:200px</ColHead>
                    <ColBody className="color-4">auto</ColBody>
                </Row>
                <Title text="左适应-右固定"></Title>
                <Row className="row">
                    <ColBody className="color-5">auto</ColBody>
                    <ColFoot className="color-3" width="100">width:100px</ColFoot>
                </Row>
                <Row className="row">
                    <ColBody className="color-2">auto</ColBody>
                    <ColFoot className="color-4" width="200">width:200px</ColFoot>
                </Row>
                <Title text="三列布局"></Title>
                <Row className="row">
                    <ColHead className="color-3" width="100">width:100px</ColHead>
                    <ColBody className="color-2">auto</ColBody>
                    <ColFoot className="color-4" width="100">width:100px</ColFoot>
                </Row>
            </Page>
        );
    }
};