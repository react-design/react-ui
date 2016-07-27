// import Message from './Message';
import Notification from 'rc-notification';
import * as React from 'react';

const notification = Notification.newInstance({});
const defaultDuration = 1.5;
export default {
    Message : {

    	// 普通提醒
    	info(){
    		notification.notice({
			    content: <div className="message-tip">
			    	<span className='fi-info-circled'></span>
			    	一条提示信息
			    </div>,
			    duration:0
			  });
    	},

    	// 成功提醒
    	success(){

    	},

    	// 错误提示
    	error(){

    	},

    	// 警告提示
    	warn(){

    	},

    	// 加载中
    	loading(){

    	}

    }
};
