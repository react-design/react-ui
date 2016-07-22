import * as Button from './components/Button'
import {Icon} from './components/icon';
import {Switch} from './components/Switch';
import {SearchBar} from './components/SearchBar';




import './components/base.css';
import './components/button/styles.less';
import './components/icon/styles.less';
import './components/searchBar/styles.less';
import './components/switch/styles.less';

export default {
    ...Button,
    SearchBar,
    Switch,
    Icon
};
