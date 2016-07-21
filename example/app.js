"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute} from 'react-router';

import Home from './pages/home/index';
import Button from './pages/button/index';
import Switch from './pages/switch/index';
import SearchBar from './pages/searchBar/index';
import Icon from './pages/icon/index';

class App extends React.Component {
    render() {
        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'}}
            >
                {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })}
            </ReactCSSTransitionGroup>
        );
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="button" component={Button}/>
            <Route path="switch" component={Switch}/>
            <Route path="searchBar" component={SearchBar}/>
            <Route path="icon" component={Icon}/>
        </Route>
    </Router>
), document.getElementById('container'));
