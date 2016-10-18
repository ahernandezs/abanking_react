import React, { Component } from 'react';
import { Link } from 'react-router';

class Balance extends Component {
  render() {
    return (
        <div id="balance">
            <button className="btn btn-collapse" type="button" data-toggle="collapse" data-target="#minutes" aria-expanded="true" aria-controls="minutes">
                <span className="icon-triangle-down"></span>
            </button>
            <p>Balance y tiempo aire</p>
            <div id="minutes" className="collapse in">
                <div className="card">
                    <div className="container">
                        <div className="row">
                            <div id="min-balance" className="col-xs-12 col-md-5 col-lg-4">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-12">
                                        <p>Saldo neto</p>
                                        <p className="text-success"><strong>$ 27,056.96 <span>MXN</span></strong></p>
                                    </div>
                                    <div className="col-xs-12 col-sm-6 col-md-12">
                                        <p>Deuda neta</p>
                                        <p className="text-danger"><strong>$ 12,020.28 <span>MXN</span></strong></p>
                                    </div>
                                </div>
                                <small>Excluye saldo en moneda extranjera</small>
                            </div>

                            <div id="min-time" className="col-xs-12 col-md-7 col-lg-8 divider-balance">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <p className="new-p">Tiempo aire</p>
                                        <a href="#" className="new-link">Nuevo número</a>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p className="label">Cuenta retiro</p>
                                        <select className="form-control form-control-sm">
                                          <option>CUENTA ÚNICA - **** 9077</option>
                                          <option>CUENTA INVERSIÓN - ****9065</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p className="label">Número celular</p>
                                        <select className="form-control form-control-sm">
                                            <option>55 3275 8068</option>
                                            <option>55 7658 8989</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <p className="label">Cantidad a cargar</p>
                                        <input type="text" className="form-control form-control-sm" placeholder="Importe" />
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <Link to="/accounts" activeClassName="active" className="btn btn-block btn-sm btn-confirm">Confirmar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Balance;
