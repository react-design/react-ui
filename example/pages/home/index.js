"use strict";

import React from 'react';
import {Row,Col,ColHead,ColBody,ColFoot,Icon} from '../../../src/index';
import './index.less';

import IconActionsheet from './images/actionsheet.png';
import IconButton from './images/button.png';
import IconCarousel from './images/carousel.png';
import IconDialog from './images/dialog.png';
import IconGrid from './images/grid.png';
import IconIcon from './images/icon.png';
import IconSearch from './images/search.png';
import IconSwitch from './images/switch.png';
import IconToast from './images/toast.png';



export default class Home extends React.Component {

    state = {

    };

    render() {
        return (
            <div className="home-layout">
                <div className="head">
                    <h1>Fruit UI - React</h1>
                    <h3>基于react维护的一套ionic风格的可复用组件库</h3>
                </div>
                <div className="function-grid">
                    <a href="#button">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconButton}/></ColHead>
                            <ColBody className="r-name">button</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#switch">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconSwitch}/></ColHead>
                            <ColBody className="r-name">switch</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#icon">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconIcon}/></ColHead>
                            <ColBody className="r-name">icon</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>

                    <a href="#searchBar">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconSearch}/></ColHead>
                            <ColBody className="r-name">searchBar</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#carousel">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconCarousel}/></ColHead>
                            <ColBody className="r-name">carousel</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#grid">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconGrid}/></ColHead>
                            <ColBody className="r-name">grid</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#toast">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconToast}/></ColHead>
                            <ColBody className="r-name">toast</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#dialog">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconDialog}/></ColHead>
                            <ColBody className="r-name">dialog</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                    <a href="#actionSheet">
                        <Row className="row">
                            <ColHead className="r-icon"><img src={IconActionsheet}/></ColHead>
                            <ColBody className="r-name">actionSheet</ColBody>
                            <ColFoot><Icon value="fi-right-open" /></ColFoot>
                        </Row>
                    </a>
                </div>
            </div>
        );
    }
};
