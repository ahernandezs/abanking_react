import React from 'react';
import Footer from './footer.js';

import {    Container, Row, Col,
            Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
            Card, CardFooter } from 'reactstrap';

export default class LayoutLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            containerFluid: true,
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    render() {
        return (
            <div className="div-cont">

                <div className="line-head">
                    <Container fluid={this.state.containerFluid}>
                        <Row>
                            <Col xs={{ size: 6, offset: 6 }} sm={{ size: 4, offset: 8 }} md={{ size: 3, offset: 9 }} lg={{ size: 2, offset: 10 }}>
                                <Dropdown isOpen={this.state.dropdownOpen} size="sm" toggle={this.toggle}>
                                    <DropdownToggle caret color="sesion">
                                        Idioma
                                    </DropdownToggle>
                                    <DropdownMenu right className="shadow-second">
                                        <DropdownItem>Español</DropdownItem>
                                        <DropdownItem>Inglés</DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="line-second"></div>

                <Container id="container-login">
                    <Row>
                        <Col lg={{ size: 10, offset: 1 }} xl={{ size: 8, offset: 2 }}>
                            <Card className="text-xs-center shadow">
                                {this.props.children}
                                <CardFooter>
                                    <p>
                                        <small className="text-muted">Comunícate con nosotros al 01 800 800 32 24</small>
                                    </p>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Footer></Footer>

            </div>
        );
    }
}
