import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class Toast extends React.Component {
    static propTypes = {
        show: React.PropTypes.bool,
        icon: React.PropTypes.string,
        iconColor: React.PropTypes.string,
    };

    static defaultProps = {
        show: false,
        icon: 'fi-ok',
        iconColor:'#ffffff'
    };

    render () {
        const {show ,icon ,iconColor, children ,className, ...others} = this.props;
        
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask show={true} transparent={true}></Mask>
                <div className="f-toast">
                    <span className={'f-toast-icon '+icon} style={{color:iconColor}}></span>
                    <p className="f-toast-content">{children}</p>
                </div>
            </div>
        );
        
    }
}
