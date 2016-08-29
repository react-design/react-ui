'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Button = (function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button() {
        _classCallCheck(this, Button);

        _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var type = _props.type;
            var icon = _props.icon;
            var small = _props.small;
            var block = _props.block;
            var disabled = _props.disabled;
            var plain = _props.plain;
            var children = _props.children;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['type', 'icon', 'small', 'block', 'disabled', 'plain', 'children', 'className']);

            var Component = this.props.href ? 'a' : 'button';
            var cls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, 'f-btn', true), _defineProperty(_classNames, 'f-btn-default', type === 'default' && !plain), _defineProperty(_classNames, 'f-btn-info', type === 'info' && !plain), _defineProperty(_classNames, 'f-btn-primary', type === 'primary' && !plain), _defineProperty(_classNames, 'f-btn-danger', type === 'danger' && !plain), _defineProperty(_classNames, 'f-btn-warn', type === 'warn' && !plain), _defineProperty(_classNames, 'f-btn-plain-default', type === 'default' && plain), _defineProperty(_classNames, 'f-btn-plain-info', type === 'info' && plain), _defineProperty(_classNames, 'f-btn-plain-primary', type === 'primary' && plain), _defineProperty(_classNames, 'f-btn-plain-danger', type === 'danger' && plain), _defineProperty(_classNames, 'f-btn-plain-warn', type === 'warn' && plain), _defineProperty(_classNames, 'f-btn-small', small), _defineProperty(_classNames, 'f-btn-block', block), _defineProperty(_classNames, 'f-btn-disabled', disabled), _defineProperty(_classNames, className, className), _classNames));
            if (icon) {
                return _react2['default'].createElement(
                    Component,
                    _extends({}, others, { className: cls }),
                    _react2['default'].createElement('span', { className: icon }),
                    children
                );
            }
            return _react2['default'].createElement(
                Component,
                _extends({}, others, { className: cls }),
                children
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            disabled: _react2['default'].PropTypes.bool,
            type: _react2['default'].PropTypes.string,
            size: _react2['default'].PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            disabled: false,
            type: 'default',
            size: 'normal'
        },
        enumerable: true
    }]);

    return Button;
})(_react2['default'].Component);

exports['default'] = Button;
module.exports = exports['default'];