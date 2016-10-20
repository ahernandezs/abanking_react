import React from 'react';
import { Link } from 'react-router';

import { Container, Row, Col } from 'reactstrap';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerFluid: true
        };
    }
    render() {
        return (
            <div className="footer">
                <Container fluid={this.state.containerFluid}>
                    <Row>
                        <Col xs="12" sm="7" className="footer-left">
                            <p>&copy; 2016 Anzen Soluciones S.A. de C.V.</p>
                        </Col>
                        <Col xs="12" sm="5" className="footer-right">
                            <p>
                                <Link to="" activeClassName="active" className="link">Ayuda</Link>
                                <Link to="" activeClassName="active" className="link">Contácto</Link>
                                <Link to="" activeClassName="active" className="link">Privacidad</Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
