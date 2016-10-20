import React from 'react';

import banner1 from '../../../images/publicity/banner-viaje.png';
import banner2 from '../../../images/publicity/banner-ishop.png';
import banner3 from '../../../images/publicity/banner-rogerwaters.png';

import {    Row, Col, Card, CardBlock, Button } from 'reactstrap';

export default class Publicitybar extends React.Component {
    render() {
        return (
            <Row id="publicity">
                <Col sm="6" lg="4">
                    <Card className="shadow-second">
                        <CardBlock>
                            <img src={banner1} className="img-fluid center-block" alt="Publicity" />
                            <Button color="adsb" size="sm">Ver detalle</Button>
                        </CardBlock>
                    </Card>
                </Col>
                <Col sm="6" lg="4">
                    <Card className="shadow-second">
                        <CardBlock>
                            <img src={banner2} className="img-fluid center-block" alt="Publicity" />
                            <Button color="adsb" size="sm">Conoce más</Button>
                        </CardBlock>
                    </Card>
                </Col>
                <Col lg="4">
                    <Card className="shadow-second">
                        <CardBlock>
                            <img src={banner3} className="img-fluid center-block" alt="Publicity" />
                            <Button color="adsb" size="sm">Ver oferta</Button>
                        </CardBlock>
                    </Card>
                </Col>
            </Row>
        );
    }
}
