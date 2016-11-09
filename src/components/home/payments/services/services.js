import React from 'react';
import { Link } from 'react-router';
import NoService from './noservice.js';

import { Alert, Container, Row, Col } from 'reactstrap';

class ServicesAdmin extends React.Component{
    render(){
        return(
            <Container id="servicesadmin">
                <Row>
                    <Col xs="12" sm="6" md="8" lg="9">
                        <Alert color="info">
                            Servicios disponibles (<strong>3</strong>).
                        </Alert>
                    </Col>
                    <Col xs="12" sm="6" md="4" lg="3">
                        <Link to="/servicestoadd" activeClassName="active" className="btn btn-blue btn-block">Agregar servicio</Link>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        In process...
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
            return <ServicesAdmin></ServicesAdmin>;
        }
    }
});
export default class Services extends React.Component {
    render() {
        return (
            <Show></Show>
        );
    }
}
