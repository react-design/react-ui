import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';
import SlickCarousel from 'react-slick';

export default class Carousel extends React.Component {
    static propTypes = {
        settings : React.PropTypes.string,
    }

    static defaultProps = {
        className: null,
        effect: 'scroll',   // 切换模式 scroll/fade
        dots: true,         // 控制面板
        arrows: false,      // 箭头
        vertical: false,    // 垂直
        autoplay: false,    // 自动切换
        infinite: true,     // 是否循环
        speed: 500,         // 动画速度
        easing: null,       // 动画效果
        beforeChange: null, // 切换前回调
        afterChange: null,  // 切换后回调
        fade: false,        // 淡入淡出
    }
    render () {
        let props = this.props;
        return (
            <div className='f-carousel'>
                <SlickCarousel {...props} draggable={!props.fade}/>
            </div>
        );
    }
}
