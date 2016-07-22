import React from 'react';
import classNames from 'classnames';

export default class Button extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        type: React.PropTypes.string,
        size: React.PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        type: 'default',
        size: 'normal'
    };

    render () {
        const {type ,icon, small ,block, disabled, plain, children ,className, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        const cls = classNames({
            ['f-btn'] : true,

            ['f-btn-default']: type === 'default' && !plain,
            ['f-btn-info']: type === 'info' && !plain,
            ['f-btn-primary']: type === 'primary' && !plain,
            ['f-btn-danger']: type === 'danger' && !plain,
            ['f-btn-warn']: type === 'warn' && !plain,


            ['f-btn-plain-default']: type === 'default' && plain,
            ['f-btn-plain-info']: type === 'info' && plain,
            ['f-btn-plain-primary']: type === 'primary' && plain,
            ['f-btn-plain-danger']: type === 'danger' && plain,
            ['f-btn-plain-warn']: type === 'warn' && plain,

            ['f-btn-small']: small,
            ['f-btn-block']: block,
            ['f-btn-disabled']: disabled,

            [className]: className,
            
        });
        if (icon){
            return (
                <Component {...others} className={cls}>
                    <span className={icon}></span>
                    {children}
                </Component>
            );
        }
        return (
            <Component {...others} className={cls}>{children}</Component>
        );
        
    }
}