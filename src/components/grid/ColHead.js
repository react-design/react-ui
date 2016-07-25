import React from 'react';
import classNames from 'classnames';

export default class ColHead extends React.Component {
	render () {
		const {children ,className ,width , ...others} = this.props;
		const cls = classNames({
            [className]: className,
        });
		return (
            <div className={cls} style={{width:width}} {...others}>{children}</div>
        );
    }
}
