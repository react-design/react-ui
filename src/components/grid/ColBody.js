import React from 'react';
import classNames from 'classnames';

export default class ColBody extends React.Component {
	render () {
		const {children ,className, ...others} = this.props;
		const cls = classNames({
            ['f-col-body'] : true,
            [className]: className,
        });
		return (
            <div className={cls} {...others}>{children}</div>
        );
    }
}