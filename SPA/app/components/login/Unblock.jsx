import React from 'react';

class Unblock extends React.Component {
    render() {
        var mainContainer = {
            minHeight: '100%',
            height: 'auto !important',
            height: '100%',
            margin: '0 auto -35px'
        };
        return (
            <div>
                <div className="dark-line">
                    <div className="line-head"></div>
                </div>
                
                <div className="container" style={ mainContainer }>
                    <br></br>
                    
                    <div className="row">
                        <div className="col-lg-10 col-lg-offset-1 col-xl-8 col-xl-offset-2">
                            <div className="card text-xs-center shadow">

                                <div className="card-block" id="unblock">
                                    <div className="logo-login"></div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h5 className="card-title">Cambio de contraseña / imagen</h5>
                                            <p>
                                                <small>
                                                    Es necesario que ingreses tu <strong>usuario</strong> y el <strong>número de folio</strong> que se te entregó vía telefónica.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2 col-xl-6 col-xl-offset-3">
                                            <input type="text" className="form-control" placeholder="Usuario"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2 col-xl-6 col-xl-offset-3">
                                            <input type="password" className="form-control" placeholder="Número de fólio"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="space col-md-4 col-md-offset-2 col-xl-3 col-xl-offset-3">
                                            <a href="http://localhost:8080/app/index.html#/prelogin" className="btn btn-danger btn-block">Cancelar</a>
                                        </div>
                                        <div className="space col-md-4 col-xl-3">
                                            <a href="http://localhost:8080/app/index.html#/changepass" className="btn btn-primary btn-block">Continuar</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-footer">
                                    <p>
                                        <small className="text-muted">Comunícate con nosotros al 01 800 800 32 24</small>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <br></br><br></br>
                </div>
            </div>
        );
    }
}

export default Unblock;