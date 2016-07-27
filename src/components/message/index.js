import Notification from 'rc-notification';
import * as React from 'react';

const defaultDuration = 1.5;
let key = 1;

const notification = Notification.newInstance({
	prefixCls : 'f-message',
    transitionName: 'move-up',
	style : {top:'20px' ,left:'50%'}
});

const notificationBlock = Notification.newInstance({
    prefixCls : 'f-message-block',
    transitionName: 'move-up',
    style : {top:'150px' ,left:'50%'}
});

function notice(mes , duration=defaultDuration ,showType='tips' ,type ,icon){
    let param = {
        key,
        content: <div>
            <span className={icon}></span>
            {mes}
        </div>,
        duration:duration
    }
    if(showType == 'block'){
        notificationBlock.notice(param);
    }else{
        notification.notice(param);
    }
	

  return (function () {
    let target = key++;
    return function () {
        if(showType == 'block'){
            notificationBlock.removeNotice(target);
        }else{
            notification.removeNotice(target);
        }
    };
  }());
}
export default {
    Message : {
    	// 普通提醒
    	info(mes ,{duration ,type}={}){
            return notice(mes ,duration ,type ,'info' ,'fi-info-circled')
    	},
    	// 成功提醒
    	success(mes ,{duration ,type}={}){
    		return notice(mes ,duration ,type ,'success' ,'fi-ok-circled')
    	},
    	// 错误提示
    	error(mes ,{duration ,type}={}){
    		return notice(mes ,duration ,type ,'error' ,'fi-cancel-circled')
    	},
    	// 警告提示
    	warn(mes ,{duration ,type}={}){
    		return notice(mes ,duration ,type ,'warn' ,'fi-help-circled')
    	},
    	// 加载中
    	loading(mes ,{duration=0 ,type}={}){
    		return notice(mes ,duration ,type ,'loading' ,'fi-spin2 animate-spin')
    	}

    }
};
