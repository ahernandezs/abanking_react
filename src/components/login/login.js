import React from 'react';
import { Link } from 'react-router';
import LoginImages from '../share/login-images.js';

import {    Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Login extends React.Component {
    render() {
        return (
            <CardBlock id="login">

                <div className="logo-login"></div>

                <Row>
                    <Col xs="12">
                        <CardTitle>
                            Bienvenido <br />
                            <small>Sergio Xavier Consuelo Ortiz</small>
                        </CardTitle>
                        <p>
                            <small>
                                <span>Nivel de seguridad adicional. </span>
                                Selecciona&nbsp;la&nbsp;imagen que elegiste al registrarte.
                            </small>
                        </p>
                    </Col>
                </Row>

                <LoginImages></LoginImages>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Contraseña" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 4, offset: 2 }}>
                        <Link to="/" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col md="4">
                        <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                    </Col>
                </Row>

            </CardBlock>
        );
    }
}
