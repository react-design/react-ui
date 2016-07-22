"use strict";

import React from 'react';
import {SearchBar} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './searchBar.less';

export default class SearchBarDemo extends React.Component {
    render() {
        return (
            <Page className="searchBar" title="searchBar" spacing>
                <Title text="默认（default）" first></Title>
                <SearchBar></SearchBar>
            </Page>
        );
    }
};
