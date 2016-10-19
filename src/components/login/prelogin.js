import React from 'react';
import { Link } from 'react-router';

import {    Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Prelogin extends React.Component {
    render() {
        return (
            <CardBlock id="prelogin">

                <div className="logo-login"></div>

                <Row>
                    <Col xs="12">
                        <CardTitle>Iniciar sesión</CardTitle>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Usuario" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <Link to="/login" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                    </Col>
                </Row>

                <div className="divider"></div>

                <small>
                    <Link to="/unblock" activeClassName="active" className="link">Desbloquear&nbsp;usuario / Olvidé&nbsp;mi&nbsp;contraseña</Link>
                </small>

            </CardBlock>
        );
    }
}
