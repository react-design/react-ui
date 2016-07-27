"use strict";

import React from 'react';
import {Row,Col,Icon} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './styles.less';

export default class IconDemo extends React.Component {

    render() {
        return (
            <Page className="icon-layout" title="Icon" spacing>
            	<Title text="All"></Title>
            	 	<Row className="row">
                        <Col><Icon value="fi-ok"></Icon></Col>
    					<Col><Icon value="fi-close"></Icon></Col>
    					<Col><Icon value="fi-attention"></Icon></Col>
    					<Col><Icon value="fi-dot"></Icon></Col>
                    </Row>
                    <Row className="row">
                		<Col><Icon value="fi-down"></Icon></Col>
                		<Col><Icon value="fi-left"></Icon></Col>
                        <Col><Icon value="fi-right"></Icon></Col>
						<Col><Icon value="fi-up"></Icon></Col>
                    </Row>
                    <Row className="row">
                		<Col><Icon value="fi-spin animate-spin"></Icon></Col>
						<Col><Icon value="fi-spin2 animate-spin"></Icon></Col>
						<Col><Icon value="fi-home"></Icon></Col>
						<Col><Icon value="fi-down-open"></Icon></Col>
                    </Row>
					<Row className="row">
                		<Col><Icon value="fi-up-open"></Icon></Col>
						<Col><Icon value="fi-right-open"></Icon></Col>
						<Col><Icon value="fi-left-open"></Icon></Col>
						<Col><Icon value="fi-search"></Icon></Col>
                    </Row>
                    <Row className="row">
                        <Col><Icon value="fi-help-circled"></Icon></Col>
                        <Col><Icon value="fi-ok-circled"></Icon></Col>
                        <Col><Icon value="fi-cancel-circled"></Icon></Col>
                        <Col><Icon value="fi-info-circled"></Icon></Col>
                    </Row>
					<Row className="row">
                		<Col><Icon value="fi-menu"></Icon></Col>
						<Col></Col>
						<Col></Col>
						<Col></Col>
                    </Row>
            </Page>
        );
    }
};
