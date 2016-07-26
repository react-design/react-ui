"use strict";

import React from 'react';
import {Row,Col,Icon,Dialog,Button,Toast} from '../../../src';
import Page from '../../component/page';
import Title from '../../component/title';
import './styles.less';

export default class DialogDemo extends React.Component {
		constructor(props) {
		  super(props);
		  let self = this;
		  this.state = {
		  	show1 : false,      // toast : 成功
        show2 : false,
        show3 : false,
        show4 : false,
        show5 : false

		  };

      this.eventHandle={
        onCancel(number){
          let sets = {};
          sets['show'+number] = false;
          self.setState(sets);
        },

        onOk(number){
          console.log('ok...',number);
          
        }
      }
		}


		dialogClickHandle(number){
			let states = this.state;
			let sets = {};
      sets['show'+number] = !states['show'+number];
      this.setState(sets);
		}

    render() {
        const self = this;

    		const {
          show1 ,
          show2 ,
          show3 ,
          show4 ,
          show5 
        } = this.state;

        return (
            <Page className="dialog-layout" title="Dialog" spacing>
            	<Title text="没有标题"></Title>
            	<Button type="info" onClick={() =>this.dialogClickHandle(1)}>1个按钮</Button>
              <Button type="primary" onClick={() =>this.dialogClickHandle(2)}>2个按钮</Button>
              <Button type="warn" onClick={() =>this.dialogClickHandle(3)}>3个按钮+自定义按钮颜色</Button>

              <Title text="含标题"></Title>
              <Button type="primary" onClick={() =>this.dialogClickHandle(4)}>1个按钮</Button>

              <Title text="大块内容"></Title>
              <Button type="danger" onClick={() =>this.dialogClickHandle(5)}>1个按钮</Button>


        	 		<Dialog 
                show={show1}
                onOk={() => self.eventHandle.onCancel(1)}
              >
        	 			确认要提交吗
        	 		</Dialog>

              <Dialog 
                show={show2}
                onCancel={() => self.eventHandle.onCancel(2)}
                onOk={() => self.eventHandle.onOk(2)}
                footer={[
                  {text:'取消',onClick:() => self.eventHandle.onCancel(2)},
                  {text:'完成',onClick:() => self.eventHandle.onOk(2)},
                ]}
                className="aaa"
              >
                <p>我的测试</p>
              </Dialog>


              <Dialog 
                show={show3}
                onCancel={() => self.eventHandle.onCancel(3)}
                onOk={() => self.eventHandle.onOk(3)}
                footer={[
                  {text:'取消',onClick:() => self.eventHandle.onCancel(3) ,color:'black'},
                  {text:'保存草稿',onClick:() => self.eventHandle.onCancel(3)},
                  {text:'提交',onClick:() => self.eventHandle.onOk(3)},
                ]}
              >
                <p>我的测试</p>
              </Dialog>

              <Dialog 
                show={show4}
                title="请求确认"
                onOk={() => self.eventHandle.onCancel(4)}
              >
                确认要提交吗？
              </Dialog>

              <Dialog 
                show={show5}
                title="详细信息"
                footer={[{text:'关闭',onClick:() => self.eventHandle.onCancel(5)}]}
              >
                <p>
                  随着应用不断变大，保证组件被正确使用变得非常有用。为此我们引入 propTypes。React.PropTypes 提供很多验证器 (validator) 来验证传入数据的有效性。当向 props 传入无效数据时，JavaScript 控制台会抛出警告。注意为了性能考虑，只在开发环境验证 propTypes。下面用例子来说明不同验证器的区别：
                </p>
              </Dialog>
            </Page>
        );
    }
};
