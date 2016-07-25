import React from 'react';
import classNames from 'classnames';

export default class Mask extends React.Component {
		static propTypes = {
        transparent: React.PropTypes.bool,
        show:React.PropTypes.bool 
    };

    static defaultProps = {
        transparent: false,
        show: false
    };

    render() {
        const {transparent ,show, ...others} = this.props;
        const className = classNames({
            'f-mask': show,
            'f-mask-transparent': transparent
        });

        return (
            <div className={className} {...others}></div>
        );
    }
}