import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
		render () {
				const {children ,className, ...others} = this.props;
				const cls = classNames({
            ['f-row'] : true,
            [className]: className, 
        });
				return (
            <div className={cls} {...others}>{children}</div>
        );
    }
}