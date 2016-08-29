'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _react = require('react');

var React = _interopRequireWildcard(_react);

var defaultDuration = 1.5;
var key = 1;

var notification = _rcNotification2['default'].newInstance({
    prefixCls: 'f-message',
    transitionName: 'move-up',
    style: { top: '20px', left: '50%' }
});

var notificationBlock = _rcNotification2['default'].newInstance({
    prefixCls: 'f-message-block',
    transitionName: 'move-up',
    style: { top: '150px', left: '50%' }
});

function notice(mes, duration, showType, type, icon) {
    if (duration === undefined) duration = defaultDuration;
    if (showType === undefined) showType = 'tips';

    var param = {
        key: key,
        content: React.createElement(
            'div',
            null,
            React.createElement('span', { className: icon }),
            mes
        ),
        duration: duration
    };
    if (showType == 'block') {
        notificationBlock.notice(param);
    } else {
        notification.notice(param);
    }

    return (function () {
        var target = key++;
        return function () {
            if (showType == 'block') {
                notificationBlock.removeNotice(target);
            } else {
                notification.removeNotice(target);
            }
        };
    })();
}
exports['default'] = {
    Message: {
        // 普通提醒
        info: function info(mes) {
            var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var duration = _ref.duration;
            var type = _ref.type;

            return notice(mes, duration, type, 'info', 'fi-info-circled');
        },
        // 成功提醒
        success: function success(mes) {
            var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var duration = _ref2.duration;
            var type = _ref2.type;

            return notice(mes, duration, type, 'success', 'fi-ok-circled');
        },
        // 错误提示
        error: function error(mes) {
            var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var duration = _ref3.duration;
            var type = _ref3.type;

            return notice(mes, duration, type, 'error', 'fi-cancel-circled');
        },
        // 警告提示
        warn: function warn(mes) {
            var _ref4 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var duration = _ref4.duration;
            var type = _ref4.type;

            return notice(mes, duration, type, 'warn', 'fi-help-circled');
        },
        // 加载中
        loading: function loading(mes) {
            var _ref5 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            var _ref5$duration = _ref5.duration;
            var duration = _ref5$duration === undefined ? 0 : _ref5$duration;
            var type = _ref5.type;

            return notice(mes, duration, type, 'loading', 'fi-spin2 animate-spin');
        }

    }
};
module.exports = exports['default'];