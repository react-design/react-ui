"use strict";

import React from 'react';
import {ActionSheet,Button} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './style.less';

export default class ActionSheetDemo extends React.Component {
  state = {
    show1: false,
  }
  handleClick = () => {
    this.state.show1 ? this.setState({show1:false}) : this.setState({show1:true})
  }
  cancle = () => {
    this.setState({show1:false})
  }
  clickA = () => {
    alert(1)
  }
  clickB = () => {
    alert(2)
  }
  render() {
    return (
      <Page className="actionSheet" title="actionSheet" spacing>
        <Title text="默认" first></Title>
        <Button type="primary" onClick={this.handleClick} block>actionSheet</Button>

        <ActionSheet show={this.state.show1}>
          <ul>
            <li onClick={this.clickA}>alert1</li>
            <li onClick={this.clickB}>alert2</li>
            <li onClick={this.cancle}>取消</li>
          </ul>
        </ActionSheet>
      </Page>
    );
  }
};
