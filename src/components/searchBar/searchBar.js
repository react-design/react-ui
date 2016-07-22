import React from 'react';
import classNames from 'classnames';

export default class SearchBar extends React.Component {
    static propTypes = {
      value: React.PropTypes.string,
      defaultValue: React.PropTypes.string,
      onSearch: React.PropTypes.func
    }

    static defaultProps = {
      value: null,
      defaultValue: '请输入',
      onSearch: null
    }

    state = {
      searchValue: this.props.defaultValue
    }

    search = (e) => {
      const {onSearch} = this.props;
      if (e.keyCode == 13){
        if (onSearch){
          onSearch()
        }
      }
    }

    change = (e) => {
      this.setState({searchValue: e.target.value})
    }

    render () {
        const {defaultValue, value ,onSearch, ...others} = this.props;
        console.log(this.state.searchValue)
        return (
            <form className="f-searchBar" action="javascript:return true">
              <input type="search" defaultValue={defaultValue} onKeyUp={(e) => this.search(e)} onChange={(e) => this.change(e)} className="f-searchBar-input"/>
            </form>
        );
    }
}
