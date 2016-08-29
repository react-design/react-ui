'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _componentsButton = require('./components/button');

var _componentsIcon = require('./components/icon');

var _componentsToast = require('./components/toast');

var _componentsMessage = require('./components/message');

var _componentsSwitch = require('./components/switch');

var _componentsSearchBar = require('./components/searchBar');

// var _componentsCarousel = require('./components/carousel');

var _componentsDialog = require('./components/dialog');

var _componentsActionSheet = require('./components/actionSheet');

var _componentsGrid = require('./components/grid');

exports['default'] = {
    Button: _componentsButton.Button,
    SearchBar: _componentsSearchBar.SearchBar,
    Switch: _componentsSwitch.Switch,
    Icon: _componentsIcon.Icon,
    // Carousel: _componentsCarousel.Carousel,
    Row: _componentsGrid.Row,
    Col: _componentsGrid.Col,
    ColHead: _componentsGrid.ColHead,
    ColBody: _componentsGrid.ColBody,
    ColFoot: _componentsGrid.ColFoot,
    Toast: _componentsToast.Toast,
    Dialog: _componentsDialog.Dialog,
    ActionSheet: _componentsActionSheet.ActionSheet,
    Message: _componentsMessage.Message
};
module.exports = exports['default'];