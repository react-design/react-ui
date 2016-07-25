"use strict";

import React from 'react';
import {Icon,Toast,Button} from '../../../src/index';
import Page from '../../component/page/index';
import Title from '../../component/title/index';
import './styles.less';

export default class ToastDemo extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        show1 : false,      // toast : 成功
        show2 : false,      // toast : 失败
        show3 : false,      // toast : loading
        show4 : false,      // toast : loading2
        timer1 : null,      // 定时器1
        timer2 : null,      // 定时器1
        timer3 : null,      // 定时器1
        timer4 : null,      // 定时器1
      };


    }

    componentWillUnmount() {
        this.state.timer1 && clearTimeout(this.state.timer1);
        this.state.timer2 && clearTimeout(this.state.timer2);
        this.state.timer3 && clearTimeout(this.state.timer3);
        this.state.timer4 && clearTimeout(this.state.timer4);
        // this.state.loadingTimer && clearTimeout(this.state.loadingTimer);
    }

    // 打开第number个toast
    toastClickHandle(number){
      let states = this.state;
      let sets = {};
      sets['show'+number] = !states['show'+number];
      this.setState(sets);
      states['timer'+number] = setTimeout(()=> {
          sets['show'+number] = false;
          this.setState(sets);
      }, 2000);
    }

    render() {
        const {
          show1 ,
          show2 ,
          show3 ,
          show4 
        } = this.state;
        return (
            <Page className="toast-layout" title="Toast" spacing>
            	<Title text="方框型"></Title>
              <Button block type="info" onClick={() =>this.toastClickHandle(1)}>成功</Button><br/>
              <Button block type="primary" onClick={() =>this.toastClickHandle(2)}>失败</Button><br/>
              <Button block type="warn" onClick={() =>this.toastClickHandle(3)}>loading1</Button><br/>
              <Button block type="danger" onClick={() =>this.toastClickHandle(4)}>loading2</Button>







              <Toast show={show1} icon="fi-attention" iconColor="#04be02"> 成功 </Toast>
              <Toast show={show2} icon="fi-close" iconColor="red"> 失败 </Toast>
              <Toast show={show3} icon="fi-spin animate-spin"> 正在加载中... </Toast>
              <Toast show={show4} icon="fi-spin2 animate-spin"> 正在加载中... </Toast>
            </Page>
        );
    }
};
