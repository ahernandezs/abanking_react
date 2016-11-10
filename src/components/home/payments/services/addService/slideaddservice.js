import React from 'react'
import Slider from 'react-slick'
import card1 from '../../../../../images/services/axtel-min.png';
import card2 from '../../../../../images/services/cfe-min.png';
import card3 from '../../../../../images/services/izzi-min.png';
import SlideAddEdit from './slideaddedit';

import {    Card, Button } from 'reactstrap';

export default class SlideAddService extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 544,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }]
        };
        return (
            <div id="Slideaddservice">
                <Slider {...settings}>
                    <div className="space"><Card className="shadow-tertiary"><img src={card1} alt="service" /><div className="service-tx">Internet Casa</div><div className="btservice">
                        <SlideAddEdit></SlideAddEdit>
                        <div>
                            <Button color="freeico">
                                <span className="icon-cancel2"></span>
                            </Button>
                        </div>
                    </div></Card></div>
                    <div className="space"><Card className="shadow-tertiary"><img src={card2} alt="service" /><div className="service-tx">Luz casa</div><div className="btservice">
                        <SlideAddEdit></SlideAddEdit>
                        <div>
                            <Button color="freeico">
                                <span className="icon-cancel2"></span>
                            </Button>
                        </div>
                    </div></Card></div>
                    <div className="space"><Card className="shadow-tertiary"><img src={card3} alt="service" /><div className="service-tx">Tv Casa</div><div className="btservice">
                        <SlideAddEdit></SlideAddEdit>
                        <div>
                            <Button color="freeico">
                                <span className="icon-cancel2"></span>
                            </Button>
                        </div>
                    </div></Card></div>
                </Slider>
            </div>
        );
    }
}
