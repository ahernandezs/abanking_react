import React from 'react'
import { Link } from 'react-router';
import Slider from 'react-slick'
import card1 from '../../../images/cards/cuenta_checks_card.png';
import card2 from '../../../images/cards/cuenta_debit_card.png';
import card3 from '../../../images/cards/cuenta_credit_card.png';

import {    Container, Row, Col,
            Card, CardBlock,
            FormGroup, Label, Input } from 'reactstrap';

export default class SlideAccount extends React.Component {
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
            <Row>
                <Col xs="12">
                    <div id="slide">
                        <Slider {...settings}>
                            <div className="card-slide">
                                <Card className="shadow-fourth checks-card">
                                    <CardBlock>
                                        <Container>
                                            <p>
                                                <strong>
                                                    Clásica
                                                    <span className="text-muted">***1581</span>
                                                </strong>
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <div className="cont-img">
                                        <img src={card1} alt="card" />
                                    </div>
                                    <CardBlock className="shadow-second">
                                        <Container>
                                            <p>
                                                Desde: 10 de Octubre de 2016
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock>
                                        <Container>
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
                                        </Container>
                                    </CardBlock>
                                    <CardBlock className="text-xs-center">
                                        <Container>
                                            <Row>
                                                <Col xs="12">
                                                    <Link to="/accounts" activeClassName="active" className="link">Ver más</Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardBlock>
                                </Card>
                            </div>
                            <div className="card-slide">
                                <Card className="shadow-fourth credit-card">
                                    <CardBlock>
                                        <Container>
                                            <p>
                                                <strong>
                                                    Gold
                                                    <span className="text-muted">***2832</span>
                                                </strong>
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <div className="cont-img">
                                        <img src={card2} alt="card" />
                                    </div>
                                    <CardBlock className="shadow-second">
                                        <Container>
                                            <p>
                                                Fecha de corte: 24 de octubre de 2016
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock>
                                        <Container>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                                    <span></span>Pago total
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <th>$ 9,000.00</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                                    <span></span>Pago mínimo
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>$ 2,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                                    <span></span>Pago sin intereses
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>$ 4,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio1" />{' '}
                                                                    <span></span>Otra cantidad
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>
                                                            <input type="text" className="form-control" placeholder="$ 0.00" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock className="text-xs-center">
                                        <Container>
                                            <Row>
                                                <Col xs="6">
                                                    <Link to="/accounts" activeClassName="active" className="link">Movimientos</Link>
                                                </Col>
                                                <Col xs="6">
                                                    <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Pagar tarjeta</Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardBlock>
                                </Card>
                            </div>
                            <div className="card-slide">
                                <Card className="shadow-fourth credit-card">
                                    <CardBlock>
                                        <Container>
                                            <p>
                                                <strong>
                                                    Gold
                                                    <span className="text-muted">***2824</span>
                                                </strong>
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <div className="cont-img">
                                        <img src={card2} alt="card" />
                                    </div>
                                    <CardBlock className="shadow-second">
                                        <Container>
                                            <p>
                                                Fecha de corte: 11 de octubre de 2016
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock>
                                        <Container>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <th>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio2" />{' '}
                                                                    <span></span>Pago total
                                                                </Label>
                                                            </FormGroup>
                                                        </th>
                                                        <th>$ 16,000.00</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio2" />{' '}
                                                                    <span></span>Pago mínimo
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>$ 4,000.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio2" />{' '}
                                                                    <span></span>Pago sin intereses
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>$ 6,500.00</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <FormGroup check>
                                                                <Label check>
                                                                    <Input type="radio" name="radio2" />{' '}
                                                                    <span></span>Otra cantidad
                                                                </Label>
                                                            </FormGroup>
                                                        </td>
                                                        <td>
                                                            <input type="text" className="form-control" placeholder="$ 0.00" />
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock className="text-xs-center">
                                        <Container>
                                            <Row>
                                                <Col xs="6">
                                                    <Link to="/accounts" activeClassName="active" className="link">Movimientos</Link>
                                                </Col>
                                                <Col xs="6">
                                                    <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Pagar tarjeta</Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardBlock>
                                </Card>
                            </div>
                            <div className="card-slide">
                                <Card className="shadow-fourth debit-card">
                                    <div className="cont-img shadow-second">
                                        <img src={card3} alt="card" />
                                    </div>
                                    <CardBlock>
                                        <Container>
                                            <p>
                                                <strong>aBanking Black</strong><br />
                                                <span>¡Te abre las puertas!<br /></span>
                                                <small>Tasa de interés del 9.95% anual fija</small>
                                            </p>
                                        </Container>
                                    </CardBlock>
                                    <CardBlock>
                                        <Container>
                                            <Row>
                                                <Col xs="12">
                                                    <Link to="/accounts" activeClassName="active" className="btn btn-ads btn-block">Solicítala ya</Link>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </CardBlock>
                                </Card>
                            </div>
                        </Slider>
                    </div>
                </Col>
            </Row>
        );
    }
}
