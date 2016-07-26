"use strict";

import React from 'react';
import {Icon,Toast,Button} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './styles.less';

export default class ToastDemo extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        show1 : false,      // toast : 成功
        show2 : false,      // toast : 失败
        show3 : false,      // toast : loading
        show4 : false,      // toast : loading2
        show5 : false,      // toast : loading2
        show6 : false,      // toast : loading2
        show7 : false,      // toast : loading2




        timer1 : null,      // 定时器1
        timer2 : null,      // 定时器1
        timer3 : null,      // 定时器1
        timer4 : null,      // 定时器1
        timer5 : null,      // 定时器1
        timer6 : null,      // 定时器1
        timer7 : null,      // 定时器1
      };


    }

    componentWillUnmount() {
        this.state.timer1 && clearTimeout(this.state.timer1);
        this.state.timer2 && clearTimeout(this.state.timer2);
        this.state.timer3 && clearTimeout(this.state.timer3);
        this.state.timer4 && clearTimeout(this.state.timer4);
        this.state.timer5 && clearTimeout(this.state.timer5);
        this.state.timer6 && clearTimeout(this.state.timer6) ;
        this.state.timer7 && clearTimeout(this.state.timer7) ;
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
          show4 ,
          show5 ,
          show6 ,
          show7
        } = this.state;
        return (
            <Page className="toast-layout" title="Toast" spacing>
            	<Title text="方框型"></Title>
              <Button type="info" onClick={() =>this.toastClickHandle(1)}>成功</Button>
              <Button type="primary" onClick={() =>this.toastClickHandle(2)}>失败</Button>
              <Button type="warn" onClick={() =>this.toastClickHandle(3)}>loading1</Button>
              <Button type="danger" onClick={() =>this.toastClickHandle(4)}>loading2</Button>

              <Title text="文字提示"></Title>
              <Button type="info" onClick={() =>this.toastClickHandle(5)}>头部显示</Button>
              <Button type="warn" onClick={() =>this.toastClickHandle(7)}>中部显示</Button>
              <Button type="primary" onClick={() =>this.toastClickHandle(6)}>底部显示</Button>




              <Toast show={show1} icon="fi-attention" iconColor="#04be02"> 成功 </Toast>
              <Toast show={show2} icon="fi-close" iconColor="red"> 失败 </Toast>
              <Toast show={show3} icon="fi-spin animate-spin"> 正在加载中... </Toast>
              <Toast show={show4} icon="fi-spin2 animate-spin"> 正在加载中... </Toast>

              <Toast show={show5} icon="fi-attention" iconColor="#04be02" type="top"> 操作成功操作 </Toast>
              <Toast show={show6} type="bottom"> 失败 </Toast>
              <Toast show={show7} > 正在加载中... </Toast>
            </Page>
        );
    }
};
