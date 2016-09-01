'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

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

var _maskMask = require('../mask/Mask');

var _maskMask2 = _interopRequireDefault(_maskMask);

var Toast = (function (_React$Component) {
    _inherits(Toast, _React$Component);

    function Toast() {
        _classCallCheck(this, Toast);

        _get(Object.getPrototypeOf(Toast.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Toast, [{
        key: 'render',
        value: function render() {
            var _classNames;

            var _props = this.props;
            var show = _props.show;
            var icon = _props.icon;
            var type = _props.type;
            var iconColor = _props.iconColor;
            var children = _props.children;
            var className = _props.className;

            var others = _objectWithoutProperties(_props, ['show', 'icon', 'type', 'iconColor', 'children', 'className']);

            var cls = (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, 'f-toast', true), _defineProperty(_classNames, 'ft-bt', type || !type && !icon), _defineProperty(_classNames, 'toast-top', type === 'top'), _defineProperty(_classNames, 'toast-bottom', type === 'bottom'), _classNames));
            return _react2['default'].createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2['default'].createElement(_maskMask2['default'], { show: true, transparent: true }),
                _react2['default'].createElement(
                    'div',
                    { className: cls },
                    icon ? _react2['default'].createElement('span', { className: 'f-toast-icon ' + icon, style: { color: iconColor } }) : '',
                    _react2['default'].createElement(
                        'p',
                        { className: 'f-toast-content' },
                        children
                    )
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            show: _react2['default'].PropTypes.bool,
            icon: _react2['default'].PropTypes.string,
            iconColor: _react2['default'].PropTypes.string,
            type: _react2['default'].PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            show: false,
            icon: '',
            iconColor: '#ffffff',
            type: ''
        },
        enumerable: true
    }]);

    return Toast;
})(_react2['default'].Component);

exports['default'] = Toast;
module.exports = exports['default'];