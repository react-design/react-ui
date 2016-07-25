"use strict";

import React from 'react';
// import {Checkbox} from '../../../src';
import {Carousel} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './carousel.less';

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
              <Title text="默认（default）" first></Title>
              <Carousel>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
                <div><h3>5</h3></div>
                <div><h3>6</h3></div>
              </Carousel>
            </Page>
        );
    }
};
