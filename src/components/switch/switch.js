import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

export default class Switch extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.string,  // 是否可以改变
        size: React.PropTypes.string,  // 大小 normal small
        checkedChildren: React.PropTypes.string,  // 选中时的内容
        uncheckedChildren: React.PropTypes.string,  // 非选中时的内容
        checked: React.PropTypes.string  // 指定当前是否选中
    };

    static defaultProps = {
        disabled: 'false',
        size: 'normal',
        checked: 'true',
        checkedChildren: '',
        uncheckedChildren: '',
    };

    state = {
      switched: this.props.checked != 'false',
    };

    handleClick = (e) => {
      this.state.switched ? this.setState({switched:false}) : this.setState({switched:true})
    };

    render() {
        const { size, disabled, className, children, ...others} = this.props;
        let container = classNames({
          'f-switch' : true,
          'f-switch-small' : this.props.size=='small',
          'f-switch-normal' : this.props.size=='normal',
          'fff-switch-small' : this.props.size=='small',
          'fff-switch-normal' : this.props.size=='normal',

        })
        let content = classNames({
          'f-switch-content': true,
          'f-switch-content-switched': !this.state.switched,
          'f-switch-content-disabled': this.props.disabled !== 'false',
        });
        let cell = classNames({
          'f-switch-cell': true,
        })
        let inner = classNames({
          'f-switch-inner': true,
          'f-switch-inner-on': this.state.switched,
          'f-switch-inner-off': !this.state.switched,
        })


        return (
            <div className={container}>
              {
                this.props.disabled == 'false' ?
                <div className={content} onClick={(e)=>this.handleClick(e)}>
                  {
                    this.props.size == 'normal' ?
                    <span className={inner}>
                      {
                        this.state.switched ? this.props.checkedChildren :
                        this.props.uncheckedChildren
                      }
                    </span> :
                    null
                  }
                  <div className={cell}>
                  </div>
                </div> :
                <div className={content}>
                  <div className={cell}>
                  </div>
                </div>
              }
              <input type="checkbox" className="fff-switch-input"/>
            </div>
        );
    }
}
