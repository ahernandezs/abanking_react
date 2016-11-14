import React from 'react';
import { Link } from 'react-router';

import { Alert, Container, Row, Col } from 'reactstrap';

export default class NewTransferConf extends React.Component {
    render() {
        return (
            <Container id="newtransferconf">
                <Alert color="warning">
                    Verifique que la información ingresada es correcta antes de confirmar la operación.
                </Alert>
                <Row>
                    <Col xs="12" lg="8">
                        <Row>
                            <Col xs="12" md="6">
                                <p className="label">Cuenta origen</p>
                                <div className="label-conf">
                                    CUENTA ÚNICA - **** 9077 $12,000.98
                                    <small><strong>MXN</strong></small>
                                </div>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Cuenta destino</p>
                                <div className="label-conf">
                                    CUENTA ÚNICA - **** 9088 $5,000.00
                                    <small><strong>MXN</strong></small>
                                </div>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Importe</p>
                                <div className="label-conf">
                                    $2,000.00
                                    <small><strong>MXN</strong></small>
                                </div>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Fecha</p>
                                <div className="label-conf">
                                    15/09/2016
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg="4">
                        <p className="label">Concepto</p>
                        <div className="label-conf">
                            AHORRO
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/newTransfer" activeClassName="active" className="btn btn-cancel btn-block">Anterior</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/newTransfer" activeClassName="active" className="btn btn-confirm btn-block">Confirmar</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
