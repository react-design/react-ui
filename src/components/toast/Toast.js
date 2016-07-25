import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/index';

export default class Toast extends React.Component {
    static propTypes = {
        show: React.PropTypes.bool,
        icon: React.PropTypes.string
    };

    static defaultProps = {
        show: false,
        icon: 'default'
    };

    render () {
        const {show ,icon, children ,className, ...others} = this.props;
        
        return (
            <div className={icon === 'loading' ? 'f-loading_toast' : ''} style={{display: show ? 'block' : 'none'}}>
                <Mask></Mask>
                <div className="f-toast">
                    <span className={'fi-ok'}></span>
                    <p className="f-toast_content">{children}</p>
                </div>
            </div>
        );
        
    }
}
