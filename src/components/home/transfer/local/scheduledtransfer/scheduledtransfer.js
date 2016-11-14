import React from 'react';
import ScheduledTransEdit from './scheduledtransferedit.js';
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
                Transferencia eliminada exitosamente
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
export default class ScheduledTransfer extends React.Component{
    render(){
        return(
            <Container id="scheduledTransfer">
                <Show></Show>
                <Row>
                    <Col xs="12">
                        <Table responsive hover size="sm" className="normalTable">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Cuenta origen</th>
                                    <th>Cuenta destino</th>
                                    <th>Concepto</th>
                                    <th>Importe</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Sep 20 2016</span></td>
                                    <td>CUENTA ÚNICA - **** 9088 $9,000.00</td>
                                    <td>CUENTA ÚNICA - **** 9077 $12,000.98</td>
                                    <td>AHORRO</td>
                                    <td><span>$500.00</span><small>MXN</small></td>
                                    <td>
                                        <div>
                                            <Button color="freeico">
                                                <span className="icon-cancel2"></span>
                                            </Button>
                                        </div>
                                        <ScheduledTransEdit></ScheduledTransEdit>
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
