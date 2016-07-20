import React from 'react';
import './styles.less';

export default class Button extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.bool,
        type: React.PropTypes.string,
        size: React.PropTypes.string
    };

    static defaultProps = {
        disabled: false,
        type: 'primary',
        size: 'normal'
    };

    render() {
        const {type, size, disabled, plain, className, children, ...others} = this.props;
        const Component = this.props.href ? 'a' : 'button';

        return (
            <div className="b-div">
            <a className="button">aa</a>

                <Component {...others} className="button1">{children}</Component>
            </div>
        );
    }
}
