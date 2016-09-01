'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylesLess = require('./styles.less');

var _stylesLess2 = _interopRequireDefault(_stylesLess);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var Carousel = (function (_React$Component) {
    _inherits(Carousel, _React$Component);

    function Carousel() {
        _classCallCheck(this, Carousel);

        _get(Object.getPrototypeOf(Carousel.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Carousel, [{
        key: 'render',
        // 淡入淡出
        value: function render() {
            var props = this.props;
            return _react2['default'].createElement(
                'div',
                { className: 'f-carousel' },
                _react2['default'].createElement(_reactSlick2['default'], _extends({}, props, { draggable: !props.fade }))
            );
        }
    }], [{
        key: 'propTypes',
        value: {
            settings: _react2['default'].PropTypes.string
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            className: null,
            effect: 'scroll', // 切换模式 scroll/fade
            dots: true, // 控制面板
            arrows: false, // 箭头
            vertical: false, // 垂直
            autoplay: false, // 自动切换
            infinite: true, // 是否循环
            speed: 500, // 动画速度
            easing: null, // 动画效果
            beforeChange: null, // 切换前回调
            afterChange: null, // 切换后回调
            fade: false },
        enumerable: true
    }]);

    return Carousel;
})(_react2['default'].Component);

exports['default'] = Carousel;
module.exports = exports['default'];