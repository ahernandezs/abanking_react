import React from 'react';
import { Link } from 'react-router';
import card1 from '../../../../images/services/izzi-min.png';
import Tooltipi from '../../../share/tool.js';

import { Alert, Container, Row, Col, Input, Card } from 'reactstrap';


export default class ServicesStep1 extends React.Component{
    render(){
        return(
            <Container id="servicestep1">
                <Alert color="info">
                    Ingrese la información requerida para dar de alta el servicio seleccionado.
                </Alert>
                <Row>
                    <Col xs="12" md="6" lg="4">
                        <p className="label">Servicio seleccionado</p>
                        <Row>
                            <Col xs="12">
                                <Card className="shadow-tertiary">
                                    <img src={card1} alt="service" />
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" md="6" lg="8">
                        <Row>
                            <Col xs="12" lg="6">
                                <p className="label">Número de contrato</p>
                                <Input size="sm" placeholder="000-000-000" />
                            </Col>
                            <Col xs="12" lg="6">
                                <p className="label">Alias <Tooltipi item="Mensaje de Alias" key="i1" id="i1"/></p>
                                <Input size="sm" />
                            </Col>
                            <Col xs="12" lg="6">
                                <p className="label">Referencia <Tooltipi item="Mensaje de Referencia" key="i2" id="i2"/></p>
                                <Input size="sm" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/servicestoadd" activeClassName="active" className="btn btn-cancel btn-block">Anterior</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/servicesstep2" activeClassName="active" className="btn btn-blue btn-block">Siguiente</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
