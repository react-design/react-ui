"use strict";

import React from 'react';
import {Button} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './grid.less';

export default class ButtonDemo extends React.Component {
    constructor(props) {
      super(props);
    
      
    }


    render() {
        return (
            <Page className="grid-layout" title="Grid" spacing>
                <Title text="等分" first></Title>
                
            </Page>
        );
    }
};