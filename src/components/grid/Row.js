import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
    																														render () {
        																														const {value, ...others} = this.props;
        																														return (
            <span className={value} {...others}></span>
        );
    }
}