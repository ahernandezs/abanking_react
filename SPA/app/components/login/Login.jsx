import React from 'react';

class Login extends React.Component {
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

                                <div className="card-block" id="images">
                                    <div className="logo-login"></div>
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h5 className="card-title">
                                                Bienvenido<br></br>
                                                <small>Sergio Xavier Consuelo Ortiz</small>
                                            </h5>
                                            <p>
                                                <small>
                                                    <span>Nivel&nbsp;de&nbsp;seguridad&nbsp;adicional. </span>
                                                    Selecciona&nbsp;la&nbsp;imagen&nbsp;que&nbsp;elegiste&nbsp;al&nbsp;registrarte.
                                                </small>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
                                                <div className="img1_opt"></div>
                                                <div className="img2_opt"></div>
                                                <div className="img3_opt"></div>
                                                <div className="img4_opt"></div>
                                                <div className="img5_opt"></div>
                                                <div className="img6_opt"></div>
                                                <div className="img7_opt"></div>
                                                <div className="img8_opt"></div>
                                                <div className="img9_opt"></div>
                                                <div className="img10_opt"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-8 col-md-offset-2 col-xl-6 col-xl-offset-3">
                                            <input type="password" className="form-control" placeholder="Contraseña"></input>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="space col-md-4 col-md-offset-2 col-xl-3 col-xl-offset-3">
                                            <a href="http://localhost:8080/app/index.html#/" className="btn btn-danger btn-block">Cancelar</a>
                                        </div>
                                        <div className="space col-md-4 col-xl-3">
                                            <a href="#" className="btn btn-primary btn-block">Continuar</a>
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

export default Login;