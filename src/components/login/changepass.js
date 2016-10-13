import React, { Component } from 'react';
import { Link } from 'react-router';

class Changepass extends Component {
  render() {
    return (
        <div id="changepass" className="card-block">

            <div className="logo-login"></div>

            <div className="row">
                <div className="col-xs-12">
                    <h6 className="card-title">
                        Nueva imagen de seguridad
                    </h6>
                    <p>
                        <small>
                            Selecciona una nueva imagen de seguridad
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
                <div className="col-xs-12">
                    <h6 className="card-title">
                        Nueva contrase&ntilde;a
                    </h6>
                    <p>
                        <small>
                            Es necesario crear una nueva contrase&ntilde;a la cual debe tener de <strong>8 a 15 caracteres</strong>, contar con al menos <strong>una may&uacute;scula</strong>, con <strong>una min&uacute;scula</strong> y <strong>un n&uacute;mero</strong>.
                        </small>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Nueva contraseña" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <input type="password" className="form-control" placeholder="Confirmar contraseña" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 offset-md-2">
                    <Link to="/unblock" activeClassName="active" className="btn btn-cancel btn-block">Cancelar</Link>
                </div>
                <div className="col-md-4">
                    <Link to="/" activeClassName="active" className="btn btn-confirm btn-block">Confirmar</Link>
                </div>
            </div>

        </div>
    );
  }
}

export default Changepass;
