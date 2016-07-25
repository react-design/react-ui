import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

export default class Carousel extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.string,
    }

    static defaultProps = {
        disabled: 'false',
    }

    state = {
      
    }

    render () {
        const { size, disabled, className, children, ...others} = this.props;

        return (
          <div>
            1123
          </div>
        );
    }
}
