"use strict";

import React from 'react';
import './styles.less';

export default class Title extends React.Component {
    render() {
        const {text ,first} = this.props;
        let className = "title-block "+(first?'mt':'');

        return (
            <div className={className}>
                {text}
            </div>
        );
    }
};