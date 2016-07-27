import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class Dialog extends React.Component {
    static propTypes = {
        show: React.PropTypes.bool,
        title: React.PropTypes.string,
        onOk: React.PropTypes.func,
        footer: React.PropTypes.array,
    };

    static defaultProps = {
        show: false,
        title: '',
        footer:[{text:'完成'}],
        onOk:function (){},
    };

    _renderButtons () {
        const {footer ,onOk} = this.props;
        if (footer.length == 1){
            let {text ,color ,onClick:onOk2} = footer[0];
            if (!onOk2) {
                onOk2 = onOk;
            }
            return <a 
                key={1} 
                href="javascript:;" 
                onClick={onOk2} 
                className="f-dialog-btn"
                style={ color ? {color:color} : {}}
                >{text}</a>
        }
        return footer.map((action, i) => {
            const {onClick ,color ,text} = action;
            return (
                <a 
                key={i} 
                href="javascript:;" 
                onClick={onClick} 
                className="f-dialog-btn"
                style={ color ? {color:color} : {}}
                >{text}</a>
            );
        });
    }

    render () {
        const {show ,title ,children ,className, ...others} = this.props;
        const cls = classNames({
            'f-dialog' : true,
            [className]: className,
        });
        return (
            <div style={{display: show ? 'block' : 'none'}}>
                <Mask show={true}></Mask>
                <div className={cls}>
                    <div className="f-dialog-hd"> 
                        <strong className="f-dialog-title">{title}</strong> 
                    </div>
                    <div className="f-dialog-bd">
                        {children}
                    </div>
                    <div className="f-dialog-ft">
                        {this._renderButtons()}
                    </div>
                </div>
            </div>
        );
        
    }
}
