import React from 'react';

import ScheduledPayEdit from './scheduledpayedit.js';
import { Container, Row, Col, Table, Button, Alert } from 'reactstrap';

class Delete extends React.Component{
    constructor(props) {
      super(props);

      this.state = {
        visible: true
      }
    }

    onDismiss = () => {
      this.setState({ visible: false });
    }
    render(){
        return(
            <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
                Movimiento eliminado exitosamente
            </Alert>
        );
    }
}
var Show = React.createClass({
    render: function(){
        if (false) {
            return <Delete></Delete>;
        }
        else {
            return <i></i>;
        }
    }
});
export default class ScheduledPay extends React.Component{
    render(){
        return(
            <Container id="scheduledpay">
                <Show></Show>
                <Row>
                    <Col xs="12">
                        <Table responsive hover size="sm" className="normalTable">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Servicio</th>
                                    <th>Cuenta retiro</th>
                                    <th>Monto a pagar</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Oct 08 2016</span></td>
                                    <td>
                                        Internet Casa
                                    </td>
                                    <td>CUENTA ÚNICA - **** 9077 $12,000.98</td>
                                    <td><span>$500.00</span><small>MXN</small></td>
                                    <td>
                                        <div>
                                            <Button color="freeico">
                                                <span className="icon-cancel2"></span>
                                            </Button>
                                        </div>
                                        <ScheduledPayEdit></ScheduledPayEdit>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
