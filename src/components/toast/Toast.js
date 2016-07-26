import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class Toast extends React.Component {
    static propTypes = {
        show: React.PropTypes.bool,
        icon: React.PropTypes.string,
        iconColor: React.PropTypes.string,
        type: React.PropTypes.string,
    };

    static defaultProps = {
        show: false,
        icon: '',
        iconColor:'#ffffff',
        type:'',
    };

    render () {
        const {show ,icon ,type ,iconColor, children ,className, ...others} = this.props;
        const cls = classNames({
            ['f-toast'] : true,
            ['ft-bt'] : type || (!type && !icon),
            ['toast-top'] : type === 'top',
            ['toast-bottom'] : type === 'bottom'
        });
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask show={true} transparent={true}></Mask>
                <div className={cls}>
                    {icon ? <span className={'f-toast-icon ' + icon} style={{color:iconColor}}></span> : ''}
                    <p className="f-toast-content">{children}</p>
                </div>
            </div>
        );
        
    }
}
