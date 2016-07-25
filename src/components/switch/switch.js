import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';

export default class Switch extends React.Component {
    static propTypes = {
        disabled: React.PropTypes.string,  // 是否可以改变
        size: React.PropTypes.string,  // 大小 normal small
        defaultChecked: React.PropTypes.string,  // 指定当前是否选中
        // checkedChildren: React.PropTypes.string,  // 选中时的内容
        // uncheckedChildren: React.PropTypes.string,  // 非选中时的内容
        onChange: React.PropTypes.func,  // 指定当前是否选中
    }

    static defaultProps = {
        disabled: 'false',
        size: 'normal',
        defaultChecked: 'true',
        checkedChildren: '',
        uncheckedChildren: '',
        onChange: null
    }

    state = {
      switched: this.props.defaultChecked != 'false',
    }

    handleClick = (e) => {
      if(this.props.disabled == 'false'){
        this.state.switched ? this.setState({switched:false}) : this.setState({switched:true})
        this.props.onChange ? this.props.onChange({checked: !this.state.switched}) : null
      }
    }

    render() {
        const { size, disabled, className, children, ...others} = this.props;
        let container = classNames({
          'f-switch': true,
          'f-switch-small': this.props.size=='small',
          'f-switch-normal': this.props.size=='normal',
        })
        let content = classNames({
          'f-switch-input': true,
          'f-switch-input-active': this.props.disabled == 'false',
          'f-switch-input-disable': this.props.disabled !== 'false',
        })
        let inner = classNames({
          'f-switch-inner': true,
          'f-switch-inner-on': this.state.switched,
          'f-switch-inner-off': !this.state.switched,
          'f-display-none': true
        })
        return (
            <div className={container}>
              {
                this.props.disabled == 'false' ?
                <input type="checkbox" className={content} checked={this.state.switched} onChange={(e) => this.handleClick(e)}/>
                 :
                <input type="checkbox" className={content} checked={this.state.false}/>
              }
              <span className={inner} onClick={(e) => this.handleClick(e)}>
                {
                  this.state.switched ? this.props.checkedChildren :
                  this.props.uncheckedChildren
                }
              </span>
            </div>
        );
    }
}
