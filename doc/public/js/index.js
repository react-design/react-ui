var $ = {
	getId : function(id){
		if(!id) return
		return document.getElementById(id)
	},
	getClass : function(selector){
		if(!selector) return
		return document.querySelector(selector)
	},
	getAllClass : function(selector){
		if(!selector) return
		return document.querySelectorAll(selector)
	},
	each : function(obj,callback,args){
		for(var i=0,l=obj.length ; i< l ; i++){
			if(callback.call(obj[i],obj[i],i) === false) break;
		}
	},
	css : function(obj,styles){
		if('string' === typeof styles){
			_css = $.cssFormat(styles);
		}
		var _cssText = '';
		for(var i in styles){
			_cssText += i + ':' + styles[i] + ';'
		}
		obj.style.cssText = _cssText
	},
	getStyle : function(ele,attr){
		if(typeof window.getComputedStyle !== 'undefined'){
			return window.getComputedStyle(ele,null)[attr]
		}
		return ele.currentStyle.getAttribute(attr)
	},
	cssFormat : function(property){
		var str = property.split('-'),
				temp = [];
		for(var i=1,l=str.length ; i<l ; i++){
			temp.push(str[i].replace(/^[a-zA-Z]/.charAt[0].toUpperCase()))
		}
		return str[0]+temp.join('')
	},
	isElementViewport : function(ele){
		var rect = ele.getBoundingClientRect();
		return (
			rect.top >=0 &&
			rect.left >=0 &&
			rect.bottom <= (window.innerHieght || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.innerWidth) ||
			(rect.bottom > 0 && rect.top <=0 )
		)
	},
	addClass : function(obj,cls){
		if($.hasClass(obj,cls)) return ;
		var oldClass = obj.className;
		var blank = oldClass != '' ? ' ' : '';
		var cls = oldClass + blank + cls;
		obj.className = cls;
	},
	hasClass : function(obj , cls){
		var oldClass = obj.className.split(/\s+/);
		if(oldClass.indexOf(cls) >= 0){
			return true
		}
		return false
	},
	removeClass : function(obj,cls){
		var oldClass = obj.className.split(/\s+/);
		var inx = oldClass.indexOf(cls)
		if( inx >= 0){
			oldClass.splice(inx,1);
			obj.className = oldClass.join(',',' ').replace(/[,]/g,' ')
		}
	}
}

// console.log($.isElementViewport($.getId('navbar')))
$.each($.getAllClass('#navbar li'), function(v,k){
	$.css(this,{
		transition : 'all 0.5s ease-out'
	})
	v.addEventListener('mouseenter', function(e){
		indicate(this)
	})
})
var indicate = function indicate (e , current){
	var w = e.clientWidth,
			h = e.clientHeight,
			l = e.offsetLeft,
			t = e.offsetTop

	$.css($.getClass('.indicateor'),{
		width : w + 'px',
		height : '3px',
		left : l + 'px',
		top : h -2  + 'px',
		background : 'linear-gradient(70deg, #fff, #cd2bee)'
	})
}
var brainbow = function init(){

	var indicator = document.createElement('div');
	indicator.className = 'indicateor';
	$.getId('navbar').appendChild(indicator)
	indicate($.getClass('li.active'))
}

brainbow()

window.onscroll = function(){
	if($.isElementViewport($.getClass('.index-desc'))){
		$.removeClass($.getClass('.index-desc .desc .phone'),'fadeOut');
		$.removeClass($.getClass('.index-desc .desc .desc-info'),'fadeOut');
		$.addClass($.getClass('.index-desc .desc .phone'),'fadeInLeft');
		$.addClass($.getClass('.index-desc .desc .desc-info'),'fadeInRight');
	}else{
		$.removeClass($.getClass('.index-desc .desc .phone'),'fadeInLeft');
		$.removeClass($.getClass('.index-desc .desc .desc-info'),'fadeInRight');
		$.addClass($.getClass('.index-desc .desc .phone'),'fadeOut');
		$.addClass($.getClass('.index-desc .desc .desc-info'),'fadeOut');
	}

	// if($.isElementViewport($.getClass('.demo'))){
	// 	$.removeClass($.getClass('.demo .desc .phone'),'fadeOut');
	// 	$.removeClass($.getClass('.demo .desc .desc-info'),'fadeOut');
	// 	$.removeClass($.getClass('.demo .desc .qrcode'),'fadeOut');
	// 	$.addClass($.getClass('.demo .desc .phone'),'fadeIn');
	// 	$.css($.getClass('.demo .desc .phone'),{
	// 		'animation-delay': '1s'
	// 	})
	// 	$.css($.getClass('.demo .desc .desc-info'),{
	// 		'animation-delay': '.3s'
	// 	})
	// 	$.css($.getClass('.demo .desc .qrcode'),{
	// 		'animation-delay': '1.5s'
	// 	})
	// 	$.addClass($.getClass('.demo .desc .desc-info'),'fadeIn');
	// 	$.addClass($.getClass('.demo .desc .qrcode'),'fadeIn');
	// }else{
	// 	$.removeClass($.getClass('.demo .desc .phone'),'fadeIn');
	// 	$.removeClass($.getClass('.demo .desc .desc-info'),'fadeIn');
	// 	$.removeClass($.getClass('.demo .desc .qrcode'),'fadeIn');
	// 	$.addClass($.getClass('.demo .desc .phone'),'fadeOut');
	// 	$.addClass($.getClass('.demo .desc .desc-info'),'fadeOut');
	// 	$.addClass($.getClass('.demo .desc .qrcode'),'fadeOut');
	// }

	// if($.isElementViewport($.getClass('.rn-demo'))){
	// 	$.removeClass($.getClass('.rn-demo .desc .phone'),'fadeOut');
	// 	$.removeClass($.getClass('.rn-demo .desc .desc-info'),'fadeOut');
	// 	$.removeClass($.getClass('.rn-demo .desc .qrcode'),'fadeOut');
	// 	$.addClass($.getClass('.rn-demo .desc .phone'),'fadeIn');
	// 	$.css($.getClass('.rn-demo .desc .phone'),{
	// 		'animation-delay': '.6s'
	// 	})
	// 	$.css($.getClass('.rn-demo .desc .desc-info'),{
	// 		'animation-delay': '.3s'
	// 	})
	// 	$.css($.getClass('.rn-demo .desc .qrcode'),{
	// 		'animation-delay': '1s'
	// 	})
	// 	$.addClass($.getClass('.rn-demo .desc .desc-info'),'fadeIn');
	// 	$.addClass($.getClass('.rn-demo .desc .qrcode'),'fadeIn');
	// }else{
	// 	// $.removeClass($.getClass('.rn-demo .desc .phone'),'fadeIn');
	// 	// $.removeClass($.getClass('.rn-demo .desc .desc-info'),'fadeIn');
	// 	// $.removeClass($.getClass('.rn-demo .desc .qrcode'),'fadeIn');
	//
	// }

}
