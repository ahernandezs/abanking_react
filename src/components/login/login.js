import React, { Component } from 'react';
import { Link } from 'react-router';


class Login extends Component {
  render() {
    return (
        <div id="login" className="card-block">

            <div className="logo-login"></div>

            <div className="row">
                <div className="col-xs-12">
                    <h6 className="card-title">
                        Bienvenido <br />
                        <small>Sergio Xavier Consuelo Ortiz</small>
                    </h6>
                    <p>
                        <small>
                            <span>Nivel de seguridad adicional. </span>
                            Selecciona&nbsp;la&nbsp;imagen que elegiste al registrarte.
                        </small>
                    </p>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-8 offset-md-2">
                        <div className="img1_opt orange"></div>
                        <div className="img2_opt orange"></div>
                        <div className="img3_opt orange"></div>
                        <div className="img4_opt orange"></div>
                        <div className="img5_opt orange"></div>
                        <div className="img6_opt orange"></div>
                        <div className="img7_opt orange"></div>
                        <div className="img8_opt orange"></div>
                        <div className="img9_opt orange"></div>
                        <div className="img10_opt orange"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <Link to="/" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/accounts" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                </div>
            </div>

        </div>
    );
  }
}

export default Login;
