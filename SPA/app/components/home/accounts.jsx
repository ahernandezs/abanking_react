import React from 'react';

class Accounts extends React.Component {
    render() {
        return (
            <div className="row" id="accounts">

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="card cards">
                        <div className="card-block">
                            <p><strong>Gold&nbsp;</strong><span className="text-muted">***5296</span></p>
                        </div>
                        <div className="cont-img">
                            <img src="../app/assets/images/cards/cuenta_debit_card.png" alt=""></img>
                        </div>
                        <div className="card-block">
                            <p className="corte">Fecha de corte: 24 de Oct del 2016</p>
                        </div>
                        <form>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <input type="radio" id="r1" name="pago" value="option1"></input>
                                    <label htmlFor="r1"><span></span>Pago total</label>
                                    <label>$9,000.00</label>
                                </li>
                                <li className="list-group-item">
                                    <input type="radio" id="r2" name="pago" value="option2"></input>
                                    <label htmlFor="r2"><span></span>Pago mínimo</label>
                                    <label>$1,000.00</label>
                                </li>
                                <li className="list-group-item">
                                    <input type="radio" id="r3" name="pago" value="option3"></input>
                                    <label htmlFor="r3"><span></span>Pago sin intereses</label>
                                    <label>$5,000.00</label>
                                </li>
                                <li className="list-group-item">
                                    <input type="radio" id="r4" name="pago" value="option4"></input>
                                    <label htmlFor="r4"><span></span>Otra cantidad</label>
                                    <label><input className="form-control form-control-sm" type="text"></input></label>
                                </li>
                            </ul>
                            <div className="card-block footbtn">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="card-link">Movimientos</a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" className="pull-xs-right btn btn-info btn-sm">Pagar tarjeta</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="card cards">
                        <div className="card-block">
                            <p><strong>Clásica&nbsp;</strong><span className="text-muted">***5259</span></p>
                        </div>
                        <div className="cont-img">
                            <img src="../app/assets/images/cards/cuenta_checks_card.png" alt=""></img>
                        </div>
                        <div className="card-block">
                            <p className="corte">Desde: 11 de Mar del 2016</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <p></p>
                                <label><strong>Disponible</strong></label>
                                <label><strong>$15,000.00</strong></label>
                            </li>
                            <li className="list-group-item">
                                <p></p>
                                <label>Depósitos</label>
                                <label>$15,000.00</label>
                            </li>
                            <li className="list-group-item">
                                <p></p>
                                <label>Pagos</label>
                                <label>$730.00</label>
                            </li>
                            <li className="list-group-item">
                                <p></p>
                                <label>Retiros</label>
                                <label>$1,500.00</label>
                            </li>
                        </ul>
                        <div className="card-block footbtn">
                            <div className="row">
                                <div className="col-xs-12">
                                    <a href="#" className="card-link"><p className="text-xs-center">Ver más</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="card credit" id="black">
                        <div className="cont-img card-img-top">
                            <img src="../app/assets/images/cards/cuenta_credit_card.png" alt=""></img>
                        </div>
                        <div className="card-block text-xs-center">
                            <p><strong>aBanking Black</strong></p>
                            <p>¡Te habre las puertas!</p>
                            <p>Tasa de interés del 9.95% anual fija</p>
                        </div>
                        <div className="card-block footbtn">
                            <div className="row">
                                <div className="col-xs-12">
                                    <a href="#" className="btn-block btn btn-sm">SOLICÍTALA YA</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <div className="card cards" id="minutes">
                        <div className="card-block">
                            <p><strong>Tiempo aire</strong></p>
                        </div>
                        <div className="cont-img">
                            <div className="logo-login"></div>
                        </div>
                        <div className="card-block">
                            <p className="corte">Número: 55 56271838</p>
                        </div>
                        <div className="card-block">
                            <div className="circle-time"></div>
                        </div>
                        <div className="card-block footbtn">
                            <div className="row">
                                <div className="col-xs-12">
                                    <a href="#" className="card-link"><p className="text-xs-center">Ver más</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Accounts;
