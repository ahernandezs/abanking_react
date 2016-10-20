import React from 'react';
import { Link } from 'react-router';
import Footer from './footer.js';
import Navbar from './navbar.js';

import { Container, Row, Col } from 'reactstrap';

export default class LayoutHome extends React.Component {
    render() {
        return (
            <div className="div-cont">

                <div id="status-sesion">
                    <Container>
                        <Row>
                            <Col xs="12" md="6">
                                <p>Último acceso: <i>Lunes, Octubre 10, 2016 11:37 AM</i></p>
                            </Col>
                            <Col xs="12" md="6">
                                <Link to="/" activeClassName="active" className="btn btn-sesion">Cerrar sesión</Link>
                                <p><strong>Sergio Xavier Consuelo Ortiz</strong></p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Navbar></Navbar>

                <Container id="container-home">
                    {this.props.children}
                </Container>

                <Footer></Footer>

            </div>
        );
    }
}
