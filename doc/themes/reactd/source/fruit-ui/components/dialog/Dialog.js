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

var Dialog = (function (_React$Component) {
    _inherits(Dialog, _React$Component);

    function Dialog() {
        _classCallCheck(this, Dialog);

        _get(Object.getPrototypeOf(Dialog.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Dialog, [{
        key: '_renderButtons',
        value: function _renderButtons() {
            var _props = this.props;
            var footer = _props.footer;
            var onOk = _props.onOk;

            if (footer.length == 1) {
                var _footer$0 = footer[0];
                var text = _footer$0.text;
                var color = _footer$0.color;
                var onOk2 = _footer$0.onClick;

                if (!onOk2) {
                    onOk2 = onOk;
                }
                return _react2['default'].createElement(
                    'a',
                    {
                        key: 1,
                        href: 'javascript:;',
                        onClick: onOk2,
                        className: 'f-dialog-btn',
                        style: color ? { color: color } : {}
                    },
                    text
                );
            }
            return footer.map(function (action, i) {
                var onClick = action.onClick;
                var color = action.color;
                var text = action.text;

                return _react2['default'].createElement(
                    'a',
                    {
                        key: i,
                        href: 'javascript:;',
                        onClick: onClick,
                        className: 'f-dialog-btn',
                        style: color ? { color: color } : {}
                    },
                    text
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props;
            var show = _props2.show;
            var title = _props2.title;
            var children = _props2.children;
            var className = _props2.className;

            var others = _objectWithoutProperties(_props2, ['show', 'title', 'children', 'className']);

            var cls = (0, _classnames2['default'])(_defineProperty({
                'f-dialog': true
            }, className, className));
            return _react2['default'].createElement(
                'div',
                { style: { display: show ? 'block' : 'none' } },
                _react2['default'].createElement(_maskMask2['default'], { show: true }),
                _react2['default'].createElement(
                    'div',
                    { className: cls },
                    _react2['default'].createElement(
                        'div',
                        { className: 'f-dialog-hd' },
                        _react2['default'].createElement(
                            'strong',
                            { className: 'f-dialog-title' },
                            title
                        )
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'f-dialog-bd' },
                        children
                    ),
                    _react2['default'].createElement(
                        'div',
                        { className: 'f-dialog-ft' },
                        this._renderButtons()
                    )
                )
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            show: _react2['default'].PropTypes.bool,
            title: _react2['default'].PropTypes.string,
            onOk: _react2['default'].PropTypes.func,
            footer: _react2['default'].PropTypes.array
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            show: false,
            title: '',
            footer: [{ text: '完成' }],
            onOk: function onOk() {}
        },
        enumerable: true
    }]);

    return Dialog;
})(_react2['default'].Component);

exports['default'] = Dialog;
module.exports = exports['default'];