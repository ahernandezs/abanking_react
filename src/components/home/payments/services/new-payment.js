import React from 'react';
import { Link } from 'react-router';
import Slidemyservice from './slidemyservices.js';

import { Alert, Container, Row, Col, Input, InputGroupAddon, InputGroup } from 'reactstrap';

class NoService extends React.Component{
    render(){
        return(
            <div>
                <Alert color="warning">
                    Actualmente no cuentas con servicios para realizar un pago.
                </Alert>
                <Link to="/NewPayment" activeClassName="active" className="btn btn-blue">Agregar servicio</Link>
            </div>
        );
    }
}
class Servicetopay extends React.Component{
    render(){
        return(
            <Container id="Servicetopay">
                <Alert color="info">
                    Selecciona el servicio a pagar.
                </Alert>
                <Row>
                    <Col xs="12" sm="5" md="4">
                        <Slidemyservice></Slidemyservice>
                    </Col>
                    <Col xs="12" sm="7" md="8">
                        <Row>
                            <Col xs="12" md="6">
                                <p className="label">Servicio seleccionado</p>
                                <Input size="sm" placeholder="Internet Casa" />
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Monto a pagar</p>
                                <InputGroup size="sm">
                                    <Input placeholder="0.00" />
                                    <InputGroupAddon>MXN</InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Cuenta retiro</p>
                                <Input type="select" name="select" id="service3" size="sm">
                                    <option disabled>Seleccione la cuenta de retiro</option>
                                    <option>CUENTA ÚNICA - **** 9077</option>
                                </Input>
                            </Col>
                            <Col xs="12" md="6">
                                <p className="label">Fecha</p>
                                <Input size="sm" placeholder="24/09/2016" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} lg={{ size: 2, offset: 8}}>
                        <Link to="/" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                    </Col>
                    <Col xs="6" sm="4" md="3" lg="2">
                        <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Siguiente</Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
var Show = React.createClass({
    render: function(){
        if (false) {
            return <NoService></NoService>;
        } else {
            return <Servicetopay></Servicetopay>;
        }
    }
});
export default class NewPayment extends React.Component {
    render() {
        return (
            <Show></Show>
        );
    }
}
