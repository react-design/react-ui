"use strict";

import React from 'react';
import {SearchBar} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './style.less';

export default class SearchBarDemo extends React.Component {
    searchDemo(value){
      this.setState({searchDemoValue: value})
    }
    changeDemo(value){
      this.setState({changeDemoValue: value})
    }
    state = {
      changeDemoValue: null,
      searchDemoValue: null,
    }
    render() {
        return (
            <Page className="searchBar" title="searchBar" spacing>
                <Title text="默认" first></Title>
                <SearchBar></SearchBar>
                <Title text="变化时的回调"></Title>
                <SearchBar placeholder="输入搜索内容" onChange={(value) => this.changeDemo(value)} button="false"></SearchBar>
                <p className="showDemo">
                  搜索内容为：{this.state.changeDemoValue}
                </p>
                <Title text="搜索时的回调"></Title>
                <SearchBar placeholder="输入搜索内容" onSearch={(value) => this.searchDemo(value)}></SearchBar>
                {
                  this.state.searchDemoValue ?
                  <p className="showDemo">
                    搜索内容为：{this.state.searchDemoValue}
                  </p> :
                  null
                }

            </Page>
        );
    }
};
