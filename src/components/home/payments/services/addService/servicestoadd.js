import React from 'react';
import { Link } from 'react-router';
import card1 from '../../../../../images/services/izzi-min.png';
import card2 from '../../../../../images/services/cfe-min.png';
import card3 from '../../../../../images/services/axtel-min.png';
import card4 from '../../../../../images/services/att-min.png';
import card5 from '../../../../../images/services/telmex-min.png';
import card6 from '../../../../../images/services/total-min.png';

import { Alert, Container, Row, Col, Input, InputGroupButton, InputGroup, Button, Card } from 'reactstrap';

export default class ServicestoAdd extends React.Component{
    render(){
        return(
            <Container id="service">
                <Alert color="info">
                    Seleccione de la lista de servicios frecuentes o busque por nombre.
                </Alert>
                <Row>
                    <Col xs="12" md="6" lg="7">
                        <p className="label">Servicios frecuentes</p>
                        <Row>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card1} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card2} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card3} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card4} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card5} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                            <Col xs="6" lg="4">
                                <Link to="/servicesstep1" activeClassName="active">
                                    <Card className="shadow-tertiary">
                                        <img src={card6} alt="service" />
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md="6" lg="5">
                        <Row>
                            <Col xs="12">
                                <p className="label">Servicios disponibles</p>
                                <p>La lista de Servicios disponibles será mostrada conforme ingrese el nombre del Servicio deseado.</p>
                            </Col>
                            <Col xs="12">
                                <p className="label">Nombre de servicio</p>
                                <InputGroup size="sm">
                                    <Input placeholder="Servicio" />
                                    <InputGroupButton><Button color="blue"><span className="icon-search"></span></Button></InputGroupButton>
                                </InputGroup>
                            </Col>
                            <Col xs="12">
                                <p className="label">Servicio seleccionado</p>
                                <p>-</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/services" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/servicesstep1" activeClassName="active" className="btn btn-blue btn-block">Siguiente</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
