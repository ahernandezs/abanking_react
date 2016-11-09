import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, Input, InputGroup, InputGroupAddon, Card } from 'reactstrap';
import card1 from '../../../../images/services/izzi-min.png';
import Tooltipi from '../../../share/tool.js';

export default class ScheduledPayEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div id="ScheduledPayEdit">
                <Button color="freeico" onClick={this.toggle}>
                    <span className="icon-pen"></span>
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Modificar pago programado
                    </ModalHeader>
                    <Container className="cardup">
                        <Row>
                            <Col xs="12" sm="6">
                                <p className="label">Servicio</p>
                                <div className="label-conf">
                                    <Card className="shadow-tertiary">
                                        <img src={card1} alt="service" />
                                        <strong>Izzi Telecom</strong><br />
                                        <small>TV Casa</small>
                                    </Card>
                                </div>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Monto a pagar</p>
                                <InputGroup size="sm">
                                    <Input placeholder="500.00" />
                                    <InputGroupAddon>MXN</InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Cuenta retiro</p>
                                <Input type="select" name="select" id="service3" size="sm">
                                    <option disabled>Seleccione la cuenta de retiro</option>
                                    <option>CUENTA ÚNICA - **** 9077</option>
                                </Input>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Fecha</p>
                                <Input size="sm" placeholder="24/09/2016" />
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Clave dinámica (token) <Tooltipi item="Mensaje de token" key="i4" id="i4"/></p>
                                <Input size="sm" placeholder="000-000" />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" sm={{ size: 4, offset: 4}} md={{ size: 3, offset: 6 }} >
                                <Button color="cancelar" block onClick={this.toggle}>Cancelar</Button>
                            </Col>
                            <Col xs="6" sm="4" md="3">
                                <Button color="confirm" block onClick={this.toggle}>Confirmar</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </div>
        );
    }
}
