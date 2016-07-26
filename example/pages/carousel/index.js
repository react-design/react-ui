"use strict";

import React from 'react';
import {Carousel} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './style.less';

export default class ButtonDemo extends React.Component {
    state = {
      switched: 'false'
    };
    handleChange = (e) => {
      this.setState({switched: e.checked.toString()})
    }
    render() {
        return (
            <Page title="carousel" spacing>
              <Title text="默认" first></Title>
              <Carousel className="slider">
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
              </Carousel>
              <Title text="自动轮播"></Title>
              <Carousel className="slider" autoplay>
                <div><img src="http://dcloud.io/hellomui/images/muwu.jpg"/></div>
                <div><img src="http://dcloud.io/hellomui/images/shuijiao.jpg"/></div>
                <div><img src="http://dcloud.io/hellomui/images/cbd.jpg"/></div>
              </Carousel>
              {
                // <Title text="渐显效果"></Title>
                // <Carousel className="slider styleDemo" fade>
                //   <div><h3>1</h3></div>
                //   <div><h3>2</h3></div>
                //   <div><h3>3</h3></div>
                //   <div><h3>4</h3></div>
                //   <div><h3>5</h3></div>
                //   <div><h3>6</h3></div>
                // </Carousel>
              }
            </Page>
        );
    }
};
