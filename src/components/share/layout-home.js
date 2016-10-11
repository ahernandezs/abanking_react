import React, { Component } from 'react';
import { Link } from 'react-router';
import Footer from './footer.js';
import Navbar from './navbar.js';

class LayoutHome extends Component {
  render() {
    return (
        <div className="div-cont">

            <div id="status-sesion">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p>Último acceso: <i>Lunes, Octubre 10, 2016 11:37 AM</i></p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <Link to="/" activeClassName="active" className="btn btn-sesion">Cerrar sesión</Link>
                            <p><strong>Sergio Xavier Consuelo Ortiz</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <Navbar></Navbar>

            <div id="container-home" className="container">
                {this.props.children}
            </div>

            <Footer></Footer>

        </div>
    );
  }
}

export default LayoutHome;
