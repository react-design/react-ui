import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class ActionSheet extends React.Component {
  static propTypes = {
    show: React.PropTypes.bool,
    onRequestClose: React.PropTypes.func
  }

  static defaultProps = {
    show: false,
    onRequestClose: null
  }

  render () {
    const {show ,children ,onRequestClose} = this.props;

    let container = classNames({
      'f-actionSheet': true,
      'f-actionSheet-show': show,
      'f-actionSheet-hidden': !show,
    })

    return (
      <div className={container}>
        <Mask
          show={show}
          transparent={false}
          conceal={onRequestClose}
        ></Mask>
        <div className="f-actionSheet-list">
          {children}
        </div>
      </div>
    );
  }
}
