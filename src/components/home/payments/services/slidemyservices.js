import React from 'react'
import Slider from 'react-slick'

import {    Card } from 'reactstrap';

export default class Slidemyservice extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            vertical: true,
            responsive: [{
                breakpoint: 543,
                settings: {
                    vertical: false
                }
            }]
        };
        return (
            <div id="slideservice" className="shadow-fourth">
                <Slider {...settings}>
                <div>
                    <Card>
                        Uno
                    </Card>
                    <Card>
                        Dos
                    </Card>
                    <Card>
                        Tres
                    </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}
