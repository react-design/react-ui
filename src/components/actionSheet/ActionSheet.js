import React from 'react';
import classNames from 'classnames';
import Mask from '../mask/Mask';

export default class ActionSheet extends React.Component {
  static propTypes = {
  }

  static defaultProps = {
    show: false,
  }
  state={
    show: true
  }

  cancel = () => {
    this.setState({show:false})
    // setTimeout(function(){
    //   this.setState({show:true})
    // },500)
  }

  render () {
    const {show ,children} = this.props;
    let ctrlShow;


    let container = classNames({
      'f-actionSheet': true,
      'f-actionSheet-show': show,
      'f-actionSheet-hidden': !show,
    })

    return (
      <div className={container}>
        <Mask
          show={show && this.state.show}
          transparent={false}
          onClick={this.cancel}
        ></Mask>
        <div className="f-actionSheet-list">
          {children}
        </div>
      </div>
    );
  }
}
