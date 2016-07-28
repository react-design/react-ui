import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class ActionSheet extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
    show: false,
  }

  cancel = () => {

  }

  render () {
    const {show ,children} = this.props;
    return (
      <div style={{display: show ? 'block' : 'none'}}>
        <Mask show={true} transparent={false} onClick={this.cancel}>
        </Mask>
        <div className="f-actionSheet-list">
          {children}
        </div>
      </div>
    );
  }
}
