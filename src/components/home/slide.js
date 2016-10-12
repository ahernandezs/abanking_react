import React, { Component } from 'react'
import Slider from 'react-slick'
import card1 from '../../images/cards/cuenta_checks_card.png';

class SlideAccount extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    };
    return (
        <div className="row">
            <div className="col-xs-12">
                <div id="slide">
                    <Slider {...settings}>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0001</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0002</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0003</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0004</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0005</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth">
                                <div className="card-block">
                                    <div className="container">
                                        <p><strong>Card&nbsp;</strong><span className="text-muted">***0006</span></p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
  }
}

export default SlideAccount;
