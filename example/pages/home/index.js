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
                <a href="#button"> button </a><br/>
                <a href="#switch"> switch </a><br/>
                <a href="#icon"> icon </a><br/>
                <a href="#searchBar"> searchBar </a><br/>
                <a href="#carousel"> carousel </a><br/>
                <a href="#grid"> grid </a><br/>
                <a href="#toast"> toast </a><br/>
                <a href="#actionSheet"> actionSheet </a><br/>
            </div>
        );
    }
};
