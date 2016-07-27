"use strict";

import React from 'react';
import {Icon,Toast,Button,Message} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './styles.less';

export default class ToastDemo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        show1 : false,      
        show2 : false,      
        show3 : false,      
        show4 : false,      
        show5 : false,      
        show6 : false,      
        show7 : false,      

        timer1 : null,      
        timer2 : null,      
        timer3 : null,      
        timer4 : null,      
        timer5 : null,      
        timer6 : null,      
        timer7 : null,      
      };

      this.hideLoading = null;
      this.hideLoadingBlock = null;

    }

    componentWillUnmount() {
        this.state.timer1 && clearTimeout(this.state.timer1);
        this.state.timer2 && clearTimeout(this.state.timer2);
        this.state.timer3 && clearTimeout(this.state.timer3);
        this.state.timer4 && clearTimeout(this.state.timer4);
        this.state.timer5 && clearTimeout(this.state.timer5);
        this.state.timer6 && clearTimeout(this.state.timer6) ;
        this.state.timer7 && clearTimeout(this.state.timer7) ;
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

    // message:文字提示
    messageClickHandle(type ,text){
      Message[type](text);
    }

    // message:块提示
    MblockClickHandle(type ,text){
      Message[type](text ,{
        type : 'block' 
      })
    }

    loadingHandle(type){
      if(type == 'show'){
        if(!this.hideLoading){
          this.hideLoading = Message.loading('正在加载中...');
        }
      }else{
        this.hideLoading();
        this.hideLoading = null;
      }
    }

    loadingBlockHandle(type){
      if(type == 'show'){
        if(!this.hideLoadingBlock){
          this.hideLoadingBlock = Message.loading('正在加载中...' ,{type:'block'});
        }
      }else{
        this.hideLoadingBlock();
        this.hideLoadingBlock = null;
      }
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

              <Title text="Message-方框提示"></Title>
              <Button type="primary" onClick={() =>this.MblockClickHandle('info', '这是一条提示')}>提示</Button>
              <Button type="warn" onClick={() =>this.MblockClickHandle('warn', '这是一条警告')}>警告</Button>
              <Button type="info" onClick={() =>this.MblockClickHandle('success', '这是一条成功')}>成功</Button>
              <Button type="danger" onClick={() =>this.MblockClickHandle('error', '这是一条错误')}>错误</Button>
              <Button type="warn" onClick={() =>this.loadingBlockHandle('show')}>loading-show</Button>
              <Button type="primary" onClick={() =>this.loadingBlockHandle('hide')}>loading-hide</Button>

              <Title text="Message-文字提示"></Title>
              <Button type="primary" onClick={() =>this.messageClickHandle('info', '这是一条提示')}>提示</Button>
              <Button type="warn" onClick={() =>this.messageClickHandle('warn', '这是一条警告')}>警告</Button>
              <Button type="info" onClick={() =>this.messageClickHandle('success', '这是一条成功')}>成功</Button>
              <Button type="danger" onClick={() =>this.messageClickHandle('error', '这是一条错误')}>错误</Button>
              <Button type="warn" onClick={() =>this.loadingHandle('show')}>loading-show</Button>
              <Button type="primary" onClick={() =>this.loadingHandle('hide')}>loading-hide</Button>

              

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
