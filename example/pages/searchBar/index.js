"use strict";

import React from 'react';
import {SearchBar} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
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
