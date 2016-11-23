import React from 'react';
import { Link } from 'react-router';
import LoginImages from '../share/login-images.js';

import {    Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Changepass extends React.Component {
    render() {
        return (
            <CardBlock id="changepass">

                <div className="logo-login"></div>

                <Row>
                    <Col xs="12">
                        <CardTitle>
                            Nueva imagen de seguridad
                        </CardTitle>
                        <p>
                            <small>
                                Selecciona una nueva imagen de seguridad
                            </small>
                        </p>
                    </Col>
                </Row>

                <LoginImages></LoginImages>

                <Row>
                    <Col xs="12">
                        <CardTitle>
                            Nueva contrase&ntilde;a
                        </CardTitle>
                        <p>
                            <small>
                                Es necesario crear una nueva contrase&ntilde;a la cual debe tener de <strong>8 a 15 caracteres</strong>, contar con al menos <strong>una may&uacute;scula</strong>, con <strong>una min&uacute;scula</strong> y <strong>un n&uacute;mero</strong>.
                            </small>
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Nueva contraseña" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 8, offset: 2 }}>
                        <input type="password" className="form-control" placeholder="Confirmar contraseña" />
                    </Col>
                </Row>

                <Row>
                    <Col md={{ size: 4, offset: 2 }}>
                        <Link to="/unblock" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col md="4">
                        <Link to="/" activeClassName="active" className="btn btn-confirm btn-block">Confirmar</Link>
                    </Col>
                </Row>

            </CardBlock>
        );
    }
}
