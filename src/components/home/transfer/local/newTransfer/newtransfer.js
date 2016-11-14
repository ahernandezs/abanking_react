import React from 'react';
import { Link } from 'react-router';

import { Alert, Container, Row, Col, Input, InputGroupAddon, InputGroup } from 'reactstrap';

export default class NewTransfer extends React.Component {
    render() {
        return (
            <Container id="newtransfer">
                <Alert color="info">
                    Puede programar transferencias y pagos a efectuarse a más tardar hasta <strong>180</strong> días contados a apartir del día de hoy.
                </Alert>
                <Row>
                    <Col xs="12" lg="8">
                        <Row>
                            <Col xs="12" md="6">
                                <p className="label">Cuenta origen</p>
                                <Input type="select" name="select" id="service3" size="sm">
                                    <option disabled>Seleccione la cuenta origen</option>
                                    <option>CUENTA ÚNICA - **** 9077</option>
                                </Input>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Cuenta destino</p>
                                <Input type="select" name="select" id="service3" size="sm">
                                    <option disabled>Seleccione la cuenta destino</option>
                                    <option>CUENTA ÚNICA - **** 9078</option>
                                </Input>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Importe</p>
                                <InputGroup size="sm">
                                    <Input placeholder="0.00" />
                                    <InputGroupAddon>MXN</InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Fecha</p>
                                <Input size="sm" placeholder="24/09/2016" />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg="4">
                        <p className="label">Concepto (opcional)</p>
                        <Input type="textarea" name="text" id="text1" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/newTransfer" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/newTransferConf" activeClassName="active" className="btn btn-blue btn-block">Siguiente</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
