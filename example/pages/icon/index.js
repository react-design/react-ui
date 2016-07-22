"use strict";

import React from 'react';
import {Icon} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './styles.less';

export default class IconDemo extends React.Component {

    render() {
        return (
            <Page className="icon-layout" title="Icon" spacing>
            	<Title text="All"></Title>
                <Icon value="fi-ok"></Icon>
								<Icon value="fi-close"></Icon>
								<Icon value="fi-attention"></Icon>
								<Icon value="fi-dot"></Icon>
								<Icon value="fi-down"></Icon>
								<Icon value="fi-left"></Icon>
								<Icon value="fi-right"></Icon>
								<Icon value="fi-up"></Icon>
								<Icon value="fi-spin"></Icon>
								<Icon value="fi-spin2"></Icon>
								<Icon value="fi-home"></Icon>
								<Icon value="fi-down-open"></Icon>
								<Icon value="fi-up-open"></Icon>
								<Icon value="fi-right-open"></Icon>
								<Icon value="fi-left-open"></Icon>
								<Icon value="fi-search"></Icon>
								<Icon value="fi-menu"></Icon>
            </Page>
        );
    }
};
