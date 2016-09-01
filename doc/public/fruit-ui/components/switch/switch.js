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

var Switch = (function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _this = this;

    _classCallCheck(this, Switch);

    _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).apply(this, arguments);

    this.state = {
      switched: this.props.defaultChecked != 'false'
    };

    this.handleClick = function (e) {
      if (_this.props.disabled == 'false') {
        _this.state.switched ? _this.setState({ switched: false }) : _this.setState({ switched: true });
        _this.props.onChange ? _this.props.onChange({ checked: !_this.state.switched }) : null;
      }
    };
  }

  _createClass(Switch, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var size = _props.size;
      var disabled = _props.disabled;
      var className = _props.className;
      var children = _props.children;

      var others = _objectWithoutProperties(_props, ['size', 'disabled', 'className', 'children']);

      var container = (0, _classnames2['default'])({
        'f-switch': true,
        'f-switch-small': this.props.size == 'small',
        'f-switch-normal': this.props.size == 'normal'
      });
      var content = (0, _classnames2['default'])({
        'f-switch-input': true,
        'f-switch-input-active': this.props.disabled == 'false',
        'f-switch-input-disable': this.props.disabled !== 'false'
      });
      var inner = (0, _classnames2['default'])({
        'f-switch-inner': true,
        'f-switch-inner-on': this.state.switched,
        'f-switch-inner-off': !this.state.switched,
        'f-display-none': true,
        'f-switch-inner-disable': this.props.disabled !== 'false'
      });
      return _react2['default'].createElement(
        'div',
        { className: container },
        this.props.disabled == 'false' ? _react2['default'].createElement('input', {
          type: 'checkbox',
          className: content,
          checked: this.state.switched,
          onChange: function (e) {
            return _this2.handleClick(e);
          }
        }) : _react2['default'].createElement('input', {
          type: 'checkbox',
          className: content,
          checked: this.state['false']
        }),
        _react2['default'].createElement(
          'span',
          { className: inner, onClick: function (e) {
              return _this2.handleClick(e);
            } },
          this.state.switched ? this.props.checkedChildren : this.props.uncheckedChildren
        )
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      disabled: _react2['default'].PropTypes.string, // 是否可以改变
      size: _react2['default'].PropTypes.string, // 大小 normal small
      defaultChecked: _react2['default'].PropTypes.string, // 指定当前是否选中
      // checkedChildren: React.PropTypes.string,  // 选中时的内容
      // uncheckedChildren: React.PropTypes.string,  // 非选中时的内容
      onChange: _react2['default'].PropTypes.func },
    enumerable: true
  }, {
    key: 'defaultProps',
    // 指定当前是否选中
    value: {
      disabled: 'false',
      size: 'normal',
      defaultChecked: 'true',
      checkedChildren: '',
      uncheckedChildren: '',
      onChange: null
    },
    enumerable: true
  }]);

  return Switch;
})(_react2['default'].Component);

exports['default'] = Switch;
module.exports = exports['default'];