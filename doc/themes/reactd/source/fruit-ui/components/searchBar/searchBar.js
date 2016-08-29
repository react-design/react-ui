'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var SearchBar = (function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar() {
    var _this = this;

    _classCallCheck(this, SearchBar);

    _get(Object.getPrototypeOf(SearchBar.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      searchValue: this.props.defaultValue || ''
    };

    this.searchAction = function (e) {
      var onSearch = _this.props.onSearch;

      if (e.keyCode == 13) {
        if (onSearch) {
          onSearch(_this.state.searchValue);
        }
      }
    };

    this.changeValue = function (e) {
      var onChange = _this.props.onChange;

      _this.setState({ searchValue: e.target.value });
      if (onChange) {
        onChange(e.target.value);
      }
    };

    this.cancel = function () {
      _this.setState({ searchValue: '' });
    };

    this.onSearchBtn = function (e) {
      var onSearch = _this.props.onSearch;

      e.preventDefault();
      if (onSearch) {
        onSearch(_this.state.searchValue);
      }
    };
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var defaultValue = _props.defaultValue;
      var placeholder = _props.placeholder;
      var value = _props.value;
      var onSearch = _props.onSearch;

      var others = _objectWithoutProperties(_props, ['defaultValue', 'placeholder', 'value', 'onSearch']);

      return _react2['default'].createElement(
        'form',
        { className: 'f-searchBar', action: 'javascript:return true' },
        _react2['default'].createElement(
          'label',
          { className: 'f-searchBar-inner' },
          _react2['default'].createElement('input', {
            type: 'search',
            placeholder: placeholder,
            value: this.state.searchValue,
            onKeyUp: function (e) {
              return _this2.searchAction(e);
            },
            onChange: function (e) {
              return _this2.changeValue(e);
            },
            className: 'f-searchBar-input'
          }),
          _react2['default'].createElement('span', { className: 'fi-close f-searchBar-inner-cancel', onClick: this.cancel })
        ),
        this.props.button !== 'false' ? _react2['default'].createElement(
          'button',
          { className: 'f-searchBar-btn', onClick: function (e) {
              return _this2.onSearchBtn(e);
            } },
          '搜索'
        ) : null
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      defaultValue: _react2['default'].PropTypes.string,
      placeholder: _react2['default'].PropTypes.string,
      button: _react2['default'].PropTypes.string,
      onSearch: _react2['default'].PropTypes.func,
      onChange: _react2['default'].PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultValue: null,
      placeholder: '搜索',
      onSearch: null,
      onChange: null,
      button: 'true'
    },
    enumerable: true
  }]);

  return SearchBar;
})(_react2['default'].Component);

exports['default'] = SearchBar;
module.exports = exports['default'];