import React, { Component } from 'react'
import { Link } from 'react-router';
import Slider from 'react-slick'
import card1 from '../../../images/cards/cuenta_checks_card.png';
import card2 from '../../../images/cards/cuenta_debit_card.png';
import card3 from '../../../images/cards/cuenta_credit_card.png';

class SlideAccount extends Component {
  render() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
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
        <div className="row">
            <div className="col-xs-12">
                <div id="slide">
                    <Slider {...settings}>
                        <div className="card-slide">
                            <div className="card shadow-fourth checks-card">
                                <div className="card-block">
                                    <div className="container">
                                        <p>
                                            <strong>
                                                Clásica
                                                <span className="text-muted">***1581</span>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card1} alt="card" />
                                </div>
                                <div className="card-block shadow-second">
                                    <div className="container">
                                        <p>
                                            Desde: 10 de Octubre de 2016
                                        </p>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <div className="container">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>Disponible</th>
                                                    <th>$ 15,000.00</th>
                                                </tr>
                                                <tr>
                                                    <td>Depósitos</td>
                                                    <td>$ 16,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Pagos</td>
                                                    <td>$ 500.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Retiros</td>
                                                    <td>$ 500.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-block text-xs-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <Link to="/accounts" activeClassName="active" className="link">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth credit-card">
                                <div className="card-block">
                                    <div className="container">
                                        <p>
                                            <strong>
                                                Dorada
                                                <span className="text-muted">***2832</span>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card2} alt="card" />
                                </div>
                                <div className="card-block shadow-second">
                                    <div className="container">
                                        <p>
                                            Fecha de corte: 24 de octubre de 2016
                                        </p>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <div className="container">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <input type="radio" id="r11" name="pago1" value="option1"/>
                                                        <label><span></span>Pago total</label>
                                                    </th>
                                                    <th>$ 9,000.00</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r22" name="pago1" value="option2" />
                                                        <label><span></span>Pago mínimo</label>
                                                    </td>
                                                    <td>$ 2,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r33" name="pago1" value="option3" />
                                                        <label><span></span>Pago sin intereses</label>
                                                    </td>
                                                    <td>$ 4,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r44" name="pago1" value="option4" />
                                                        <label><span></span>Otra cantidad</label>
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder="$ 0.00" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-block text-xs-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <Link to="/accounts" activeClassName="active" className="link">Movimientos</Link>
                                            </div>
                                            <div className="col-xs-6">
                                                <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Pagar tarjeta</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth credit-card">
                                <div className="card-block">
                                    <div className="container">
                                        <p>
                                            <strong>
                                                Dorada
                                                <span className="text-muted">***2824</span>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                                <div className="cont-img">
                                    <img src={card2} alt="card" />
                                </div>
                                <div className="card-block shadow-second">
                                    <div className="container">
                                        <p>
                                            Fecha de corte: 11 de octubre de 2016
                                        </p>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <div className="container">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <th>
                                                        <input type="radio" id="r1" name="pago" value="option1" />
                                                        <label><span></span>Pago total</label>
                                                    </th>
                                                    <th>$ 16,000.00</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r2" name="pago" value="option2" />
                                                        <label><span></span>Pago mínimo</label>
                                                    </td>
                                                    <td>$ 4,000.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r3" name="pago" value="option3" />
                                                        <label><span></span>Pago sin intereses</label>
                                                    </td>
                                                    <td>$ 6,500.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <input type="radio" id="r4" name="pago" value="option4" />
                                                        <label><span></span>Otra cantidad</label>
                                                    </td>
                                                    <td>
                                                        <input type="text" className="form-control" placeholder="$ 0.00" />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-block text-xs-center">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <Link to="/accounts" activeClassName="active" className="link">Movimientos</Link>
                                            </div>
                                            <div className="col-xs-6">
                                                <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Pagar tarjeta</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-slide">
                            <div className="card shadow-fourth debit-card">
                                <div className="cont-img shadow-second">
                                    <img src={card3} alt="card" />
                                </div>
                                <div className="card-block">
                                    <div className="container">
                                        <p>
                                            <strong>aBanking Black</strong><br />
                                            <span>¡Te abre las puertas!<br /></span>
                                            <small>Tasa de interés del 9.95% anual fija</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="card-block">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <Link to="/accounts" activeClassName="active" className="btn btn-ads btn-block">Solicítala ya</Link>
                                            </div>
                                        </div>
                                    </div>
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
