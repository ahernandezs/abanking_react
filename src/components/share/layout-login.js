import React, { Component } from 'react';
import Footer from './footer.js';

class LayoutLogin extends Component {
  render() {
    return (
        <div className="div-cont">

            <div className="line-head">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-6 offset-xs-6 col-sm-4 offset-sm-8 col-md-3 offset-md-9 col-lg-2 offset-lg-10">
                            <div className="dropdown">
                                <button className="btn btn-sm dropdown-toggle" type="button" id="dropdownlang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Idioma
                                </button>
                                <div className="dropdown-menu dropdown-menu-right shadow-second" aria-labelledby="dropdownlang">
                                    <a className="dropdown-item" href="">Español</a>
                                    <a className="dropdown-item" href="">Inglés</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-second"></div>

            <div id="container-login" className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                        <div className="card text-xs-center shadow">

                            {this.props.children}

                            <div className="card-footer">
                                <p>
                                    <small className="text-muted">Comunícate con nosotros al 01 800 800 32 24</small>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
  }
}

export default LayoutLogin;
