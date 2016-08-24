var Button = require('fui').Button;

(function(type){
	if(!type){
		console.error('没有指定window.pageName');
		return;
	}
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
					<Button plain type="primary">primary</Button> 
					<Button plain type="warn">warn</Button> 
					<Button plain type="danger">danger</Button> 
				</div>, document.getElementById('button_ex2'));


			ReactDOM.render(
				<div> 
					<Button icon="fi-left-open f-left">default</Button> 
					<Button icon="fi-right-open f-right">default</Button> 
					<Button icon="fi-spin animate-spin" type="primary">primary</Button> 
					<Button icon="fi-spin2 animate-spin" type="primary">primary</Button> 
					<Button icon="fi-attention" type="warn">warn</Button> 
					<Button icon="fi-home" type="danger">danger</Button> 
				</div>, document.getElementById('button_ex3'));


			ReactDOM.render(
				<div> 
					<Button block>default</Button> 
					<Button block type="info">info</Button> 
					<Button block type="primary">primary</Button> 
					<Button block type="warn">warn</Button> 
					<Button block type="danger">danger</Button> 
				</div>, document.getElementById('button_ex4') );


			ReactDOM.render(
				<div> 
					<Button disabled="true">default</Button> 
					<Button disabled type="info">info</Button> 
					<Button disabled type="primary">primary</Button> 
					<Button disabled type="warn">warn</Button> 
					<Button disabled type="danger">danger</Button> 
				</div>, document.getElementById('button_ex5') ); 

			ReactDOM.render(
				<div> 
					<Button small>default</Button> 
					<Button small type="info">info</Button> 
					<Button small type="primary">primary</Button> 
					<Button small type="warn">warn</Button> 
					<Button small type="danger">danger</Button> 
				</div>, document.getElementById('button_ex6') );
		},
		
	}
	var _res = reactResource[type];
	if(_res){
		_res();
	}else{
		console.error('页面',type,'没有指定实现');
		return;
	}
})(window.pageName);


// var Icon = require('fui').Icon;
// ReactDOM.render(<div> <Icon value="fi-spin animate-spin"></Icon> <h2>All Icon</h2> <ul> <li> <Icon value="fi-ok"></Icon> <code>fi-ok</code> </li> <li> <Icon value="fi-close"></Icon> <code>fi-close</code> </li> <li> <Icon value="fi-attention"></Icon> <code>fi-attention</code> </li> <li> <Icon value="fi-dot"></Icon> <code>fi-dot</code> </li> <li> <Icon value="fi-down"></Icon> <code>fi-down</code> </li> <li> <Icon value="fi-left"></Icon> <code>fi-left</code> </li> <li> <Icon value="fi-right"></Icon> <code>fi-right</code> </li> <li> <Icon value="fi-up"></Icon> <code>fi-up</code> </li> <li> <Icon value="fi-spin"></Icon> <code>fi-spin</code> </li> <li> <Icon value="fi-spin2"></Icon> <code>fi-spin2</code> </li> <li> <Icon value="fi-home"></Icon> <code>fi-home</code> </li> <li> <Icon value="fi-down-open"></Icon> <code>fi-down-open</code> </li> <li> <Icon value="fi-up-open"></Icon> <code>fi-up-open</code> </li> <li> <Icon value="fi-right-open"></Icon> <code>fi-right-open</code> </li> <li> <Icon value="fi-left-open"></Icon> <code>fi-left-open</code> </li> <li> <Icon value="fi-search"></Icon> <code>fi-search</code> </li> <li> <Icon value="fi-help-circled"></Icon> <code>fi-help-circled</code> </li> <li> <Icon value="fi-ok-circled"></Icon> <code>fi-ok-circled</code> </li> <li> <Icon value="fi-cancel-circled"></Icon> <code>fi-cancel-circled</code> </li> <li> <Icon value="fi-info-circled"></Icon> <code>fi-info-circled</code> </li> <li> <Icon value="fi-menu"></Icon> <code>fi-menu</code> </li> </ul> </div>, document.getElementById('icon_ex1'));

//  var fui = require('fui');
//         var Switch = fui.Switch;
//         var Icon = fui.Icon;
//         ReactDOM.render(<div> <Switch /></div>, document.getElementById('switch_ex1'));
//         ReactDOM.render(<div> <Switch size="small" /></div>, document.getElementById('switch_ex2') );
//         ReactDOM.render(<div> <Switch size="normal" checkedChildren="on" uncheckedChildren="off"/> <Switch size="normal" defaultChecked="false" checkedChildren="开" uncheckedChildren="关"/> </div>, document.getElementById('switch_ex3') );





