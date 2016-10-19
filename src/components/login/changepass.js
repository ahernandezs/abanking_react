import React from 'react';
import { Link } from 'react-router';

import {    Container, Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Changepass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerFluid: true
        };
    }
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

                <Container fluid={this.state.containerFluid}>
                    <Row>
                        <Col xs="12" md={{ size: 8, offset: 2 }}>
                            <div className="img1_opt orange"></div>
                            <div className="img2_opt orange"></div>
                            <div className="img3_opt orange"></div>
                            <div className="img4_opt orange"></div>
                            <div className="img5_opt orange"></div>
                            <div className="img6_opt orange"></div>
                            <div className="img7_opt orange"></div>
                            <div className="img8_opt orange"></div>
                            <div className="img9_opt orange"></div>
                            <div className="img10_opt orange"></div>
                        </Col>
                    </Row>
                </Container>

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
