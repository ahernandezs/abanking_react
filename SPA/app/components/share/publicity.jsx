import React from 'react';

class Publicity extends React.Component {
    render() {
        return (
            <div id="publi">
                <button className="btn btn-info" data-toggle="modal" data-target=".modal">Modal Publicity</button>

                <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="publicity" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <div className="logo-abanking"></div>
                                <div>Definiendo la banca del futuro</div>
                            </div>
                            <div className="modal-body">
                                <p>
                                    <strong>En aBanking trabajamos constantemente en ofrecerte una mejor experiencia bancaria.</strong><br></br>
                                    Por ello, hemos integrado las siguientes funcionalidades:
                                </p><br></br>
                            <img src="../app/assets/images/publicity/cont.png" className="img-fluid center-block" alt="Publicity"></img>
                                <br></br><p>
                                    <strong>Solicitar Nueva tarjeta de crédito</strong><br></br>
                                    Ahora desde tu panel de cuentas puedes solicitar las tarjetas preaprobadas que aBanking te ofrece.
                                </p>
                            </div>
                            <div className="modal-footer">
                                <div className="pull-xs-left">
                                    <p><small className="text-muted">Puedes configurar las alertas que aparecen en aBanking desde preferencias.</small></p>
                                </div>
                                <button type="button" className="btn btn-info">Alertas</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Publicity;
