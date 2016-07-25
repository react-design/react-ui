import React from 'react';
import classNames from 'classnames';

export default class Col extends React.Component {
	render () {
		const {children ,className ,flex ,wdp, ...others} = this.props;
		const cls = classNames({
            ['f-col'] : true,
            ['flex-' + flex] : flex,
            [className]: className,
        });
		return (
            <div className={cls} {...others}>{children}</div>
        );
    }
}