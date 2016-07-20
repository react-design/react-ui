"use strict";

import React from 'react';
import {Icon} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './styles.less';

export default class IconDemo extends React.Component {

    render() {
        return (
            <Page className="icon" title="Icon" spacing>
                <Icon className="aa">3</Icon>
                
            </Page>
        );
    }
};