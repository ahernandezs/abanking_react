import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import Tooltipi from '../../../../share/tool.js';

export default class ScheduledTransEdit extends React.Component {
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
                        Modificar transferencia programada
                    </ModalHeader>
                    <Container className="cardup">
                        <Row>
                            <Col xs="12" sm="6">
                                <p className="label">Cuenta origen</p>
                                <Input type="select" name="select" id="trans1" size="sm">
                                    <option disabled>Seleccione la cuenta origen</option>
                                    <option>CUENTA ÚNICA - **** 9077</option>
                                </Input>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Cuenta destino</p>
                                <Input type="select" name="select" id="trans2" size="sm">
                                    <option disabled>Seleccione la cuenta destino</option>
                                    <option>CUENTA ÚNICA - **** 9088</option>
                                </Input>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Importe</p>
                                <InputGroup size="sm">
                                    <Input placeholder="1500.00" />
                                    <InputGroupAddon>MXN</InputGroupAddon>
                                </InputGroup>
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Fecha</p>
                                <Input size="sm" placeholder="15/09/2016" />
                            </Col>
                            <Col xs="12" sm="6">
                                <p className="label">Concepto</p>
                                <Input type="textarea" name="text" id="text4" />
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
