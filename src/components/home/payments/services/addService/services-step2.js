import React from 'react';
import { Link } from 'react-router';
import card1 from '../../../../../images/services/izzi-min.png';
import Tooltipi from '../../../../share/tool.js';

import { Alert, Container, Row, Col, Input, Card } from 'reactstrap';

export default class ServicesStep2 extends React.Component{
    render(){
        return(
            <Container id="servicestep2">
                <Alert color="warning">
                    Verifica que los datos son correctos antes de confirmar.
                </Alert>
                <Row>
                    <Col xs="12" md="4" lg="3">
                        <Card className="shadow-tertiary">
                            <img src={card1} alt="service" />
                        </Card>
                    </Col>
                    <Col xs="12" md="8" lg="9">
                        <Row>
                            <Col xs="12" sm="6">
                                <p className="label">Servicio seleccionado</p>
                                <div className="label-conf">
                                    <strong>Izzi Telecom</strong><br />
                                    <small>TV Casa</small>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Número de contrato</p>
                                <div className="label-conf">
                                    01928 9292 02929
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Alias</p>
                                <div className="label-conf">
                                    Internet Casa
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Referencia</p>
                                <div className="label-conf">
                                    0904161459
                                </div>
                            </Col>
                            <Col xs="12" sm={{ size: 6, offset: 6 }}>
                                <p className="label">Clave dinámica (token) <Tooltipi item="Mensaje de token" key="i3" id="i3"/></p>
                                <Input size="sm" placeholder="000-000" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/servicesstep1" activeClassName="active" className="btn btn-cancel btn-block">Anterior</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/services" activeClassName="active" className="btn btn-confirm btn-block">Confirmar</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
