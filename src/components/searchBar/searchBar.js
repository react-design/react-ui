import React from 'react';
import classNames from 'classnames';

export default class SearchBar extends React.Component {
    static propTypes = {
      defaultValue: React.PropTypes.string,
      placeholder: React.PropTypes.string,
      button: React.PropTypes.string,
      onSearch: React.PropTypes.func,
      onChange: React.PropTypes.func,
    }

    static defaultProps = {
      defaultValue: null,
      placeholder: '搜索',
      onSearch: null,
      onChange: null,
      button: 'true'
    }

    state = {
      // searchValue: this.props.defaultValue
      searchValue: this.props.defaultValue || ''
    }

    searchAction = (e) => {
      const {onSearch} = this.props;
      if (e.keyCode == 13){
        if (onSearch){
          onSearch(this.state.searchValue)
        }
      }
    }

    changeValue = (e) => {
      const {onChange} = this.props;
      this.setState({searchValue: e.target.value})
      if (onChange){
        onChange(e.target.value)
      }
    }

    cancel = () => {
      this.setState({searchValue: ''})
    }

    onSearchBtn = (e) => {
      const {onSearch} = this.props;
      e.preventDefault()
      if (onSearch){
        onSearch(this.state.searchValue)
      }
    }

    render () {
      const {defaultValue, placeholder, value , onSearch, ...others} = this.props;
      return (
        <form className="f-searchBar" action="javascript:return true">
          <label className="f-searchBar-inner">
            <input type="search"
              placeholder={placeholder}
              value={this.state.searchValue}
              onKeyUp={(e) => this.searchAction(e)}
              onChange={(e) => this.changeValue(e)}
              className="f-searchBar-input"
            />
            <span className="fi-close f-searchBar-inner-cancel" onClick={this.cancel}></span>
          </label>
          {
            this.props.button !== 'false' ?
            <button className="f-searchBar-btn" onClick={(e) => this.onSearchBtn(e)}>
              搜索
            </button> :
            null
          }

        </form>
      );
    }
}
