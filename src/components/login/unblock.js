import React from 'react';
import { Link } from 'react-router';

import {    Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Unblock extends React.Component {
    render() {
        return (
            <CardBlock id="unblock">

                <div className="logo-login"></div>

                <Row>
                    <Col xs="12">
                        <CardTitle>Cambio de contraseña / imagen</CardTitle>
                        <p>
                            <small>
                                Es necesario que ingreses tu <strong>usuario</strong> y el <strong>número de folio</strong> que se te entregó vía telefónica.
                            </small>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Usuario" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Número de fólio" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 4, offset: 2 }}>
                        <Link to="/" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col md="4">
                        <Link to="/changepass" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                    </Col>
                </Row>

            </CardBlock>
        );
    }
}
