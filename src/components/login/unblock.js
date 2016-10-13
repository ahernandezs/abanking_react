import React, { Component } from 'react';
import { Link } from 'react-router';

class Unblock extends Component {
  render() {
    return (
        <div id="unblock" className="card-block">

            <div className="logo-login"></div>

            <div className="row">
                <div className="col-xs-12">
                    <h6 className="card-title">Cambio de contraseña / imagen</h6>
                    <p>
                        <small>
                            Es necesario que ingreses tu <strong>usuario</strong> y el <strong>número de folio</strong> que se te entregó vía telefónica.
                        </small>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Usuario" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Número de fólio" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <Link to="/" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/changepass" activeClassName="active" className="btn btn-blue btn-block">Continuar</Link>
                </div>
            </div>

        </div>
    );
  }
}

export default Unblock;
