import React from 'react';
import classNames from 'classnames';
import './styles.less';

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

    render() {
        const {type, size, disabled, plain, children ,className, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';
        const cls = classNames({
            ["f-btn"]: true,


            ["f-btn-default"]: type === 'default' && !plain,
            ["f-btn-info"]: type === 'info' && !plain,
            ["f-btn-primary"]: type === 'primary' && !plain,
            
            ["f-btn-danger"]: type === 'danger' && !plain,
            ["f-btn-warn"]: type === 'warn',

            ["f-btn-plain-primary"]: type === 'primary' && plain,

            ["f-btn-plain-default"]: type === 'default' && plain,

            ["f-btn-mini"]: size === 'small',

            ["f-btn-disabled"]: disabled,

            [className]: className
        });
        return (
            <Component {...others} className={cls}>{children}</Component>
        );
    }
}