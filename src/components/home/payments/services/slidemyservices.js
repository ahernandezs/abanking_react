import React from 'react'
import Slider from 'react-slick'
import card1 from '../../../../images/services/axtel-min.png';
import card2 from '../../../../images/services/cfe-min.png';
import card3 from '../../../../images/services/izzi-min.png';

import {    Card } from 'reactstrap';

export default class Slidemyservice extends React.Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            responsive: [{
                breakpoint: 543,
                settings: {
                    vertical: false
                }
            }]
        };
        return (
            <div id="Slidemyservice">
                <Slider {...settings}>
                    <Card className="shadow-tertiary"><img src={card1} alt="service" /><div className="service-tx">Internet Casa</div></Card>
                    <Card className="shadow-tertiary"><img src={card2} alt="service" /><div className="service-tx">Luz casa</div></Card>
                    <Card className="shadow-tertiary"><img src={card3} alt="service" /><div className="service-tx">Tv Casa</div></Card>
                </Slider>
            </div>
        );
    }
}
