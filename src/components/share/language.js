import React from 'react';
import { Container, Row, Col, Button, Modal, ModalHeader } from 'reactstrap';

export default class Language extends React.Component {
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
            <div>
                <Button color="lngmenu" onClick={this.toggle}>
                    <span className="icon-earth"></span>Idioma <br />
                    <small>Seleccione el idioma de su preferencia.</small>
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} size="sm">
                    <ModalHeader toggle={this.toggle}>
                        Idioma
                    </ModalHeader>
                    <Container>
                        <p className="txt-modal">Seleccione el idioma de su preferencia.</p>
                        <Row>
                            <Col xs="6">
                                <Button color="language" block onClick={this.toggle}>Español</Button>
                            </Col>
                            <Col xs="6">
                                <Button color="language" block onClick={this.toggle}>Inglés</Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal>
            </div>
        );
    }
}
