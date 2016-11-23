import React from 'react';

import { Container, Row, Col } from 'reactstrap';

export default class LoginImages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerFluid: true
        };
    }
    render() {
        return (
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
        );
    }
}
