import React from 'react';
import { Link } from 'react-router';

import { Container, Alert } from 'reactstrap';

export default class NoService extends React.Component{
    render(){
        return(
            <Container>
                <Alert color="warning">
                    Actualmente no cuentas con servicios para realizar un pago.
                </Alert>
                <Link to="/" activeClassName="active" className="btn btn-blue">Agregar servicio</Link>
            </Container>
        );
    }
}
