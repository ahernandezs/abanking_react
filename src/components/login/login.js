import React from 'react';
import { Link } from 'react-router';

import {    Container, Row, Col,
            CardBlock, CardTitle } from 'reactstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerFluid: true
        };
    }
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
