import React from 'react';
import { Link } from 'react-router';
import card3 from '../../../../images/services/izzi-min.png';

import { Alert, Container, Row, Col, Card, Input } from 'reactstrap';

export default class NewPaymentConfirmation extends React.Component{
    render(){
        return(
            <Container id="newPayConfirm">
                <Alert color="warning">
                    Verifica que los datos son correctos antes de confirmar.
                </Alert>
                <Row>
                    <Col xs="12" md="4" lg="3">
                        <Card className="shadow-tertiary"><img src={card3} alt="service" /><div className="service-tx">Tv Casa</div></Card>
                    </Col>
                    <Col xs="12" md="8" lg="9">
                        <Row>
                            <Col xs="12" sm="6">
                                <p className="label">Servicio seleccionado</p>
                                <div className="label-conf">
                                    <strong>Izzi Telecom</strong><br />
                                    <small>Internet Casa</small>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Cuenta retiro</p>
                                <div className="label-conf">
                                    CUENTA ÚNICA - **** 9077 $12,000.98
                                    <small><strong>MXN</strong></small>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Monto a pagar</p>
                                <div className="label-conf">
                                    $ 650.00 <small><strong>MXN</strong></small>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Fecha</p>
                                <div className="label-conf">
                                    24/09/2016
                                </div>
                            </Col>
                            <Col xs="12" sm={{ size: 6, offset: 6 }}>
                                <p className="label">Clave dinámica (token)</p>
                                <Input size="sm" placeholder="000-000" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/newPayment" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/accounts" activeClassName="active" className="btn btn-confirm btn-block">Confirmar</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
