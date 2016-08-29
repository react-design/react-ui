(function(type){
	// if(!type){return; }
	var fui = require('fui');
	var Button 	= fui.Button ,
		Icon 	= fui.Icon ,
		Row 	= fui.Row ,
		Col 	= fui.Col ,
		ColHead = fui.ColHead ,
		ColBody = fui.ColBody ,
		ColFoot = fui.ColFoot ,
		Switch 	= fui.Switch ,
		SearchBar = fui.SearchBar ,
		Toast = fui.Toast ,
		Message = fui.Message ,
		Dialog = fui.Dialog ,
		ActionSheet = fui.ActionSheet 


	var reactResource = {
		button : function(){
			ReactDOM.render(
				<div> 
					<Button >default</Button> 
					<Button type="info">info</Button> 
					<Button type="primary">primary</Button> 
					<Button type="warn">warn</Button> 
					<Button type="danger">danger</Button> 
				</div>, document.getElementById('button_ex1'));

			ReactDOM.render(
				<div> 
					<Button plain>default</Button> 
					<Button plain type="info">info</Button> 
				</div>, document.getElementById('button_ex2'));


			ReactDOM.render(
				<div> 
					<Button icon="fi-left-open f-left">default</Button> 
					<Button icon="fi-right-open f-right">default</Button> 
					<Button icon="fi-spin animate-spin" type="primary">primary</Button> 
					<Button icon="fi-spin2 animate-spin" type="primary">primary</Button>  
				</div>, document.getElementById('button_ex3'));


			ReactDOM.render(
				<div> 
					<Button block>default</Button> 
					<Button block type="primary">primary</Button> 
				</div>, document.getElementById('button_ex4') );


			ReactDOM.render(
				<div> 
					<Button disabled="true">default</Button> 
					<Button disabled type="primary">primary</Button> 
				</div>, document.getElementById('button_ex5') ); 

			ReactDOM.render(
				<div> 
					<Button small>default</Button> 
					<Button small type="primary">primary</Button> 
				</div>, document.getElementById('button_ex6') );
		},
		icon : function(){
			ReactDOM.render(
				<div> 
					<Icon value="fi-spin animate-spin"></Icon> 
					<h3>All Icon</h3> 
					<ul> 
						<li> <Icon value="fi-ok"></Icon> <code>fi-ok</code> </li> 
						<li> <Icon value="fi-close"></Icon> <code>fi-close</code> </li> 
						<li> <Icon value="fi-attention"></Icon> <code>fi-attention</code> </li> 
						<li> <Icon value="fi-dot"></Icon> <code>fi-dot</code> </li> 
						<li> <Icon value="fi-down"></Icon> <code>fi-down</code> </li> 
						<li> <Icon value="fi-left"></Icon> <code>fi-left</code> </li> 
						<li> <Icon value="fi-right"></Icon> <code>fi-right</code> </li> 
						<li> <Icon value="fi-up"></Icon> <code>fi-up</code> </li> 
						<li> <Icon value="fi-spin"></Icon> <code>fi-spin</code> </li> 
						<li> <Icon value="fi-spin2"></Icon> <code>fi-spin2</code> </li> 
						<li> <Icon value="fi-home"></Icon> <code>fi-home</code> </li> 
						<li> <Icon value="fi-down-open"></Icon> <code>fi-down-open</code> </li> 
						<li> <Icon value="fi-up-open"></Icon> <code>fi-up-open</code> </li> 
						<li> <Icon value="fi-right-open"></Icon> <code>fi-right-open</code> </li> 
						<li> <Icon value="fi-left-open"></Icon> <code>fi-left-open</code> </li> 
						<li> <Icon value="fi-search"></Icon> <code>fi-search</code> </li> 
						<li> <Icon value="fi-help-circled"></Icon> <code>fi-help-circled</code> </li> 
						<li> <Icon value="fi-ok-circled"></Icon> <code>fi-ok-circled</code> </li> 
						<li> <Icon value="fi-cancel-circled"></Icon> <code>fi-cancel-circled</code> </li> 
						<li> <Icon value="fi-info-circled"></Icon> <code>fi-info-circled</code> </li> 
						<li> <Icon value="fi-menu"></Icon> <code>fi-menu</code> </li> 
					</ul> 
				</div>, document.getElementById('icon_ex1')
			);
		},
		grid : function(){
			ReactDOM.render(
				<div> 
					<Row className="row">
                    	<Col className="color-1">1/1</Col>
	                </Row>
	                <Row className="row">
	                    <Col className="color-2">1/2</Col>
	                    <Col className="color-3">1/2</Col>
	                </Row>
	                <Row className="row">
	                    <Col className="color-4">1/3</Col>
	                    <Col className="color-3">1/3</Col>
	                    <Col className="color-5">1/3</Col>
	                </Row>
	                <Row className="row">
	                    <Col className="color-4">1/4</Col>
	                    <Col className="color-3">1/4</Col>
	                    <Col className="color-1">1/4</Col>
	                    <Col className="color-5">1/4</Col>
	                </Row>
				</div>, document.getElementById('grid_ex1'));

			ReactDOM.render(
				<div> 
					<Row className="row">
	                    <Col className="color-1" flex="1">1/3</Col>
	                    <Col className="color-2" flex="2">2/3</Col>
	                </Row>
	                <Row className="row">
	                    <Col className="color-1" flex="1">1/4</Col>
	                    <Col className="color-3" flex="1">1/4</Col>
	                    <Col className="color-5" flex="2">2/4</Col>
	                </Row>
				</div>, document.getElementById('grid_ex2'));

			ReactDOM.render(
				<div> 
					<Row className="row">
	                    <ColHead className="color-1" width="100">width:100px</ColHead>
	                    <ColBody className="color-2">auto</ColBody>
	                </Row>
	                <Row className="row">
	                    <ColHead className="color-3" width="200">width:200px</ColHead>
	                    <ColBody className="color-4">auto</ColBody>
	                </Row>
				</div>, document.getElementById('grid_ex3'));

			ReactDOM.render(
				<div> 
					<Row className="row">
	                    <ColBody className="color-5">auto</ColBody>
	                    <ColFoot className="color-3" width="100">width:100px</ColFoot>
	                </Row>
	                <Row className="row">
	                    <ColBody className="color-2">auto</ColBody>
	                    <ColFoot className="color-4" width="200">width:200px</ColFoot>
	                </Row>
				</div>, document.getElementById('grid_ex4'));

			ReactDOM.render(
				<div> 
					<Row className="row">
	                    <ColHead className="color-3" width="100">width:100px</ColHead>
	                    <ColBody className="color-2">auto</ColBody>
	                    <ColFoot className="color-4" width="100">width:100px</ColFoot>
	                </Row>
				</div>, document.getElementById('grid_ex5'));
		},
		switch : function(){
			var SwithEvent = React.createClass({
				  getInitialState: function() {
				    return {switched: 'false'};
				  },
				  handleClick: function(event) {
				  	this.setState({switched: event.checked.toString()})
				  },
				  render: function() {
				    return (
				    	<div>
					    	<Switch size="normal" onChange={this.handleClick} defaultChecked="false"/>
			              	<div className="showCb">
			                	当前状态是：{this.state.switched}
			              	</div>
		              	</div>
				    );
				  }
				});
			ReactDOM.render(
				<div> 
					<Switch/>
				</div>, document.getElementById('switch_ex1'));

			ReactDOM.render(
				<div> 
					<Switch size="small"/>
				</div>, document.getElementById('switch_ex2'));

			ReactDOM.render(
				<div> 
					<Switch size="normal" checkedChildren="on" uncheckedChildren="off"/>
					<Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/>
					<Switch size="normal" defaultChecked="false" checkedChildren=<Icon className="aa" value=""/> uncheckedChildren=<Icon className="aa"/>/>
				</div>, document.getElementById('switch_ex3'));

			ReactDOM.render(
				<div> 
					<Switch size="normal" defaultChecked="false" disabled="true" checkedChildren="开" uncheckedChildren="关"/>
              		<Switch size="small" defaultChecked="false" disabled="true"/>
				</div>, document.getElementById('switch_ex4'));

			ReactDOM.render(
				<SwithEvent />, document.getElementById('switch_ex5'));
		},
		search : function(){
			var ChangeComponent = React.createClass({
				getInitialState: function() {
				    return {changeDemoValue: ''};
				},
				handleClick: function(value) {
				  	this.setState({changeDemoValue: value})
				},
				render: function() {
				    return (
				    	<div>
					    	<SearchBar placeholder="输入搜索内容" onChange={this.handleClick} button="false"></SearchBar>
			              	<p className="showDemo">
			                  搜索内容为：{this.state.changeDemoValue}
			                </p>
		              	</div>
				    );
				}
			});
			var CallbackComponent = React.createClass({
				getInitialState: function() {
				    return {searchDemoValue: ''};
				},
				handleClick: function(value) {
				  	this.setState({searchDemoValue: value})
				},
				render: function() {
				    return (
				    	<div>
					    	<SearchBar placeholder="输入搜索内容" onSearch={this.handleClick}></SearchBar>
			              	<p className="showDemo">
			                  搜索内容为：{this.state.searchDemoValue}
			                </p>
		              	</div>
				    );
				}
			});
			ReactDOM.render(
				<div> 
					<SearchBar></SearchBar>
				</div>, document.getElementById('search_ex1'));

			ReactDOM.render(
				<ChangeComponent />, document.getElementById('search_ex2'));

			ReactDOM.render(
				<CallbackComponent />, document.getElementById('search_ex3'));
		},
		toast : function(){
			var ToastComponent = React.createClass({
				getInitialState: function() {
				    return {show_top: false, show_normal:false};
				},
				topShowHandle: function() {
					var self = this;
				  	self.setState({show_top: true});
				  	setTimeout(function(){
				  		self.setState({show_top: false});
				  	},2000);
				},
				normalShowHandle: function() {
					var self = this;
				  	self.setState({show_normal: true});
				  	setTimeout(function(){
				  		self.setState({show_normal: false});
				  	},2000);
				},
				render: function() {
				    return (
				    	<div>
				    		<Button onClick={this.normalShowHandle}>正常提示</Button>
					    	<Button type="primary" onClick={this.topShowHandle}>底部提示</Button>

					    	<Toast show={this.state.show_normal} icon="fi-spin animate-spin"> 正在加载中... </Toast>
			              	<Toast 
				                show={this.state.show_top} 
				                icon="fi-attention" 
				                iconColor="#04be02"
				                type="bottom"
				              > 
				              顶部成功 </Toast>
		              	</div>
				    );
				}
			});
			ReactDOM.render(<ToastComponent />, document.getElementById('toast_ex1'));
		},
		message : function(){
			var loadingHide , loadingBlockHide ;
			var MessageComponent = React.createClass({
				loadingHandle: function(show) {
				  	if(show){
				        if(!loadingBlockHide){
				          loadingBlockHide = Message.loading('正在加载中...');
				        }
				    }else{
				        loadingBlockHide();
				        loadingBlockHide = null;
				    }
				},
				loadingBlockHandle: function(show) {
				  	if(show){
				        if(!loadingBlockHide){
				          loadingBlockHide = Message.loading('正在加载中...',{type:'block'});
				        }
				    }else{
				        loadingBlockHide();
				        loadingBlockHide = null;
				    }
				},
				showHandle: function(arg) {
					Message[arg.type](arg.text,{type : arg.showType});
				},
				render: function() {
				    return (
				    	<div>
				    		<h3>方框提示</h3>
				    		<Button onClick={this.showHandle.bind(this,{type:'info' ,showType:'block' ,text:'这是一条提示'})}>正常提示</Button>
					    	<Button type="primary" onClick={this.loadingBlockHandle.bind(this,true)}>loading-show</Button>
					    	<Button type="info" onClick={this.loadingBlockHandle.bind(this,false)}>loading-hide</Button>

					    	<h3>文字提示</h3>
					    	<Button type="primary" onClick={this.showHandle.bind(this,{type:'info',text:'这是一条提示'})}>正常提示</Button>
					    	<Button type="warn" onClick={this.loadingHandle.bind(this, true)}>loading-show</Button>
					    	<Button type="danger" onClick={this.loadingHandle.bind(this, false)}>loading-hide</Button>
		              	</div>
				    );
				}
			});
			ReactDOM.render(<MessageComponent />, document.getElementById('message_ex'));
		},
		dialog : function(){
			var DialogComponent = React.createClass({
				getInitialState: function() {
				    return {show1 : false, show2 : false, show3 : false}
				},
				dialogClickHandle : function(number){
					var states = this.state;
					var sets = {};
		      		sets['show'+number] = !states['show'+number];
		      		this.setState(sets);
				},
				dialogOnCancel : function(number){
					var sets = {};
			        sets['show'+number] = false;
			        this.setState(sets);
				},
				render: function() {
					var states = this.state;
					var eventOnCancel = this.dialogOnCancel;
				    return (
				    	<div>
				    		<Button type="info" onClick={this.dialogClickHandle.bind(this ,1)}>1个按钮</Button>
				            <Button type="warn" onClick={this.dialogClickHandle.bind(this ,2)}>3个按钮+自定义按钮颜色</Button>
				            <Button type="primary" onClick={this.dialogClickHandle.bind(this ,3)}>含标题</Button>
				            <Dialog show={states.show1} onOk={eventOnCancel.bind(this,1)} > 确认要提交吗 </Dialog>
			              <Dialog show={states.show2} footer={[
			                  {text:'取消',onClick:eventOnCancel.bind(this,2) ,color:'black'},
			                  {text:'保存草稿',onClick:eventOnCancel.bind(this,2)},
			                  {text:'提交',onClick:eventOnCancel.bind(this,2)},
			                ]} >
			                <p>我的测试</p>
			              </Dialog>
			              <Dialog show={states.show3} title="请求确认" onOk={eventOnCancel.bind(this,3)} > 确认要提交吗？ </Dialog>
		              	</div>
				    );
				}
			});
			ReactDOM.render(<DialogComponent />, document.getElementById('dialog_ex'));
		},
		actionSheet : function(){
			var ActionSheetComponent = React.createClass({
				getInitialState: function() {
				    return {show1 : false}
				},
				handleClick : function(){
					this.state.show1 ? this.setState({show1:false}) : this.setState({show1:true})
				},
				onCancel : function(number){
					this.setState({show1:false})
				},
				clickA : function(){
					alert('您点击了第一个按钮');
				},
				render: function() {
				    return (
				    	<div>
				    		<Button type="primary" onClick={this.handleClick} block>actionSheet</Button>
					        <ActionSheet show={this.state.show1} onRequestClose={this.onCancel}>
					          <ul>
					            <li onClick={this.clickA}>alert</li>
					            <li> <a href="tel:4008123123">订餐电话</a> </li>
					            <li onClick={this.onCancel}>取消</li>
					          </ul>
					        </ActionSheet>
		              	</div>
				    );
				}
			});
			ReactDOM.render(<ActionSheetComponent />, document.getElementById('actionSheet_ex'));
		},
		
	}
	reactResource['button']();
	reactResource['icon']();
	reactResource['switch']();
	reactResource['grid']();
	reactResource['search']();
	reactResource['toast']();
	reactResource['message']();
	reactResource['dialog']();
	reactResource['actionSheet']();
	console.log('load over');
	return;
	var _res = reactResource[type];
	if(_res){
		_res();
	}else{
		console.error('页面',type,'没有指定实现');
		return;
	}
})(window.pageName);






