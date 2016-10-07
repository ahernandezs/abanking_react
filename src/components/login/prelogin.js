import React, { Component } from 'react';
import { Link } from 'react-router';

class Prelogin extends Component {
  render() {
    return (
        <div id="prelogin" className="card-block">

            <div className="logo-login"></div>

            <div className="row">
                <div className="col-xs-12">
                    <h6 className="card-title">Iniciar sesión</h6>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Usuario"></input>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <Link to="/login" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                </div>
            </div>

            <div className="divider"></div>

            <small>
                <Link to="/unblock" activeClassName="active" className="link">Desbloquear&nbsp;usuario / Olvidé&nbsp;mi&nbsp;contraseña</Link>
            </small>

        </div>
    );
  }
}

export default Prelogin;
