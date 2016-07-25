import React from 'react';
import styles from './styles.less';
import classNames from 'classnames';
import SlickCarousel from 'react-slick';

export default class Carousel extends React.Component {
    // static propTypes = {
    //     settings : React.PropTypes.string,
    // }

    static defaultProps = {
        // settings : {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        // }
    }
    render () {
        let props = this.props
        if (props.effect === 'fade') {
          props.fade = true;
          props.draggable = false;
        }
        let carousel = classNames({
            'f-carousel': true,

        })
        return (
            <div className={carousel}>
                <SlickCarousel {...this.props} />
            </div>
        );
    }
}
