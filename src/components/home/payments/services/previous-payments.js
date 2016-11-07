import React from 'react';

import { Container, Row, Col, Input, Table } from 'reactstrap';

export default class PreviousPay extends React.Component{
    render(){
        return(
            <Container id="previouspay">
                <Row>
                    <Col xs="12" sm="6" md="4" xl="3">
                        <p className="label">Desde</p>
                        <Input type="select" name="select" id="previouspay1" size="sm">
                            <option>Últimos 10 días</option>
                            <option>Últimos 30 días</option>
                            <option>Últimos 60 días</option>
                        </Input>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <Table responsive hover size="sm" className="normalTable">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Servicio</th>
                                    <th>Cuenta retiro</th>
                                    <th>Monto pagado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Sep 08 2016</span></td>
                                    <td>
                                        Internet Casa
                                    </td>
                                    <td>CUENTA ÚNICA - **** 9077 $12,000.98</td>
                                    <td><span>$500.00</span><small>MXN</small></td>
                                </tr>
                                <tr>
                                    <td><span>Sep 09 2016</span></td>
                                    <td>
                                        Agua Casa
                                    </td>
                                    <td>CUENTA ÚNICA - **** 2837 $10,540.00</td>
                                    <td><span>$195.82</span><small>MXN</small></td>
                                </tr>
                                <tr>
                                    <td><span>Sep 15 2016</span></td>
                                    <td>
                                        Luz Casa
                                    </td>
                                    <td>CUENTA ÚNICA - **** 9077 $12,000.98</td>
                                    <td><span>$478.00</span><small>MXN</small></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
