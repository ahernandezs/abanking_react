import React from 'react';
import { Link } from 'react-router';

import {    Container, Row, Col,
            Card, Input } from 'reactstrap';

export default class Balance extends React.Component {
    render() {
        return (
            <div id="balance">
                <button className="btn btn-collapse" type="button" data-toggle="collapse" data-target="#minutes" aria-expanded="true" aria-controls="minutes">
                    <span className="icon-triangle-down"></span>
                </button>
                <p>Balance y tiempo aire</p>
                <div id="minutes" className="collapse in">
                    <Card className="shadow-tertiary">
                        <Container>
                            <Row>
                                <Col id="min-balance" xs="12" md="5" lg="4">
                                    <Row>
                                        <Col xs="12" sm="6" md="12">
                                            <p>Saldo neto</p>
                                            <p className="text-success"><strong>$ 27,056.96 <span>MXN</span></strong></p>
                                        </Col>
                                        <Col xs="12" sm="6" md="12">
                                            <p>Deuda neta</p>
                                            <p className="text-danger"><strong>$ 12,020.28 <span>MXN</span></strong></p>
                                        </Col>
                                    </Row>
                                    <small>Excluye saldo en moneda extranjera</small>
                                </Col>

                                <Col id="min-time" xs="12" md="7" lg="8" className="divider-balance">
                                    <Row>
                                        <Col xs="12">
                                            <p className="new-p">Tiempo aire</p>
                                            <a href="#" className="new-link">Nuevo número</a>
                                        </Col>
                                        <Col xs="12" sm="6">
                                                <p className="label">Cuenta retiro</p>
                                                <Input type="select" name="select" id="select1" size="sm">
                                                    <option>CUENTA ÚNICA - **** 9077</option>
                                                    <option>CUENTA INVERSIÓN - ****9065</option>
                                                </Input>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <p className="label">Número celular</p>
                                            <Input type="select" name="select" id="select1" size="sm">
                                                <option>55 3275 8068</option>
                                                <option>55 7658 8989</option>
                                            </Input>
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <p className="label">Cantidad a cargar</p>
                                            <input type="text" className="form-control form-control-sm" placeholder="Importe" />
                                        </Col>
                                        <Col xs="12" sm="6">
                                            <Link to="/accounts" activeClassName="active" className="btn btn-block btn-sm btn-confirm">Confirmar</Link>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </div>
            </div>
        );
    }
}
