import React from 'react';

import { Container, Row, Col, Input, Table } from 'reactstrap';

export default class PreviousTrans extends React.Component{
    render(){
        return(
            <Container id="previoustrans">
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
                                    <th>Cuenta origen</th>
                                    <th>Cuenta destino</th>
                                    <th>Estatus</th>
                                    <th>Importe</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>Sep 01 2016</span></td>
                                    <td>CUENTA ÚNICA - **** 9077 $9,000.45</td>
                                    <td>CUENTA ÚNICA - **** 9088 $12,000.98</td>
                                    <td>Procesada</td>
                                    <td><span>$500.00</span><small>MXN</small></td>
                                </tr>
                                <tr>
                                    <td><span>Sep 03 2016</span></td>
                                    <td>CUENTA ÚNICA - **** 9088 $8,000.00</td>
                                    <td>CUENTA ÚNICA - **** 2837 $10,540.00</td>
                                    <td>Cancelada</td>
                                    <td><span>$195.82</span><small>MXN</small></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}
