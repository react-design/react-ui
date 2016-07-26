"use strict";

import React from 'react';
import {Row,Col,ColHead,ColBody,ColFoot} from '../../../src/index';
import './index.less';

export default class Home extends React.Component {

    state = {

    };

    render() {
        return (
            <div className="home-layout">
                React - UI<br/>
                <Row className="row">
                    <Col><a href="#button"> button </a></Col>
                    <Col><a href="#switch"> switch </a></Col>
                    <Col><a href="#icon"> icon </a></Col>
                </Row>
                <Row className="row">
                    <Col><a href="#carousel"> carousel </a></Col>
                    <Col><a href="#grid"> grid </a></Col>
                    <Col><a href="#toast"> toast </a></Col>
                </Row>
                <Row className="row">
                    <Col><a href="#searchBar"> searchBar </a></Col>
                    <Col><a href="#dialog"> dialog </a></Col>
                </Row>
                
            </div>
        );
    }
};
