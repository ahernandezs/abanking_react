import React from 'react';
import { Link } from 'react-router';

import Language from './language.js';

var Boot = React.createClass({
    close: function(){
      var ob = this.refs.icme;
      ob.click();
    },
    render: function(){
        return(
            <div data-target="#collapsemenu" data-toggle="collapse">
                <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical" onClick={this.close}>Cuentas</Link>
            </div>
        );
    }
});

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-full shadow-second">
                <div className="container panel">

                    <div className="navbar-brand logo-abanking hidden-sm-down"></div>
                    <button ref="icme" className="hidden-md-up"                data-target="#collapsemenu" data-toggle="collapse" type="button" aria-expanded="false" aria-controls="collapsemenu" data-parent="#navbar">&#9776;</button>
                    <button className="hidden-md-up pull-xs-right"  data-target="#collapsecont" data-toggle="collapse" type="button" aria-expanded="false" aria-controls="collapsecont" data-parent="#navbar"><span className="icon-headphones"></span></button>
                    <button className="hidden-md-up pull-xs-right"  data-target="#collapseconf" data-toggle="collapse" type="button" aria-expanded="false" aria-controls="collapseconf" data-parent="#navbar"><span className="icon-gear"></span></button>

                    <div className="collapse navbar-toggleable-sm">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/accounts" activeClassName="active" className="btn btn-navbar">Cuentas</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/accounts" activeClassName="active" className="btn btn-navbar">Inversiones</Link>
                            </li>
                            <li className="nav-menu nav-item">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="navbar-pagos" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pagos
                                    </button>
                                    <div className="pay dropdown-menu dropdown-menu-left shadow-tertiary" aria-labelledby="navbar-pagos">
                                        <ul>
                                            <li><Link to="/newPayment" activeClassName="active" className="btn btn-navbar"><span className="icon-basket"></span>&nbsp;&nbsp;Pago de servicios</Link></li>
                                            <li><Link to="/newCreditPayment" activeClassName="active" className="btn btn-navbar"><span className="icon-credit-card"></span>&nbsp;&nbsp;Pago de créditos</Link></li>
                                            <li><Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-dollar"></span>&nbsp;&nbsp;Pago de Impuestos</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-menu nav-item">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" type="button" id="navbar-trans" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Transferencias
                                    </button>
                                    <div className="trans dropdown-menu dropdown-menu-left shadow-tertiary" aria-labelledby="navbar-trans">
                                        <ul>
                                            <li><Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-loop"></span>&nbsp;&nbsp;Transferencia entre mis cuentas</Link></li>
                                            <li><Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-earth"></span>&nbsp;&nbsp;Transferencia a terceros SPEI</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-location"></span>&nbsp;Sucursales</Link>
                            </li>
                            <li className="nav-item pull-md-right">
                                <div id="men" className="nav-link">

                                    <div className="dropdown">
                                        <button className="btn" type="button" id="dropdowncot" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon-headphones"></span>
                                        </button>
                                        <div className="globo-men dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdowncot">
                                            <div className="container corto">
                                                <h6>Contácto</h6>
                                                <p className="container">Nuestros asesores están disponibles para asesorarte por los siguientes medios.</p>
                                                <div className="globo-cont">
                                                    <div><span className="icon-phone"></span></div>
                                                    <div>
                                                        <Link>
                                                            <p>
                                                                Llamenos al 01 800 3848 3990 <br /> o al 01 800 9989 2718
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="globo-cont">
                                                    <div><span className="icon-comment-discussion"></span></div>
                                                    <div>
                                                        <Link to="/accounts" activeClassName="active">
                                                            <p>
                                                                Comentarios generales.
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="globo-cont">
                                                    <div><span className="icon-question"></span></div>
                                                    <div>
                                                        <Link to="/accounts" activeClassName="active">
                                                            <p>
                                                                Ayuda con el sitio web.
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button className="btn" type="button" id="dropdowncog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon-gear"></span>
                                        </button>
                                        <div className="globo-men dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdowncog">
                                            <div className="container largo">
                                                <h6>Configuración</h6>
                                                <p className="container">Configure sus alertas, su idioma y administre su información personal.</p>
                                                <div className="globo-cont">
                                                    <div><span className="icon-safe"></span></div>
                                                    <div>
                                                        <Link to="/accounts" activeClassName="active">
                                                            <p>
                                                                Seguridad<br />
                                                                <small>Actualice sus datos para proteger su cuenta.</small>
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="globo-cont">
                                                    <div><span className="icon-key"></span></div>
                                                    <div>
                                                        <Link to="/accounts" activeClassName="active">
                                                            <p>
                                                                Acceso<br />
                                                                <small>Actualice su imagen de seguridad y contraseña de acceso.</small>
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="globo-cont">
                                                    <div><span className="icon-alarm"></span></div>
                                                    <div>
                                                        <Link to="/accounts" activeClassName="active">
                                                            <p>
                                                                Alertas y notificaciones<br />
                                                                <small>Modifique las alertas generadas por cambios en su cuenta.</small>
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="globo-cont">
                                                    <div><span className="icon-earth"></span></div>
                                                    <Language></Language>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="collapsemenu" className="shadow-tertiary panel-collapse collapse hidden-md-up">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Boot></Boot>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Inversiones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Pagos</Link>
                                    <ul className="nav-second nav navbar-nav">
                                        <li className="nav-item"><Link to="/newPayment" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-basket"></span>&nbsp;&nbsp;Pago de servicios</Link></li>
                                        <li className="nav-item"><Link to="/newCreditPayment" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-credit-card"></span>&nbsp;&nbsp;Pago de créditos</Link></li>
                                        <li className="nav-item"><Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-dollar"></span>&nbsp;&nbsp;Pago de impuestos</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Transferencias</Link>
                                    <ul className="nav-second nav navbar-nav">
                                        <li className="nav-item"><Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-loop"></span>&nbsp;&nbsp;Transferencia entre mis cuentas</Link></li>
                                        <li className="nav-item"><Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-earth"></span>&nbsp;&nbsp;Transferencia a terceros SPEI</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-location"></span>&nbsp;Sucursales</Link>
                                </li>
                                <div className="divider">
                                    <Link to="/" activeClassName="active" className="btn btn-navbar-sesion"><span className="icon-switch"></span>&nbsp;&nbsp;Cerrar sesión</Link>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <div id="collapseconf" className="panel-collapse collapse hidden-md-up">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-safe"></span>&nbsp;Seguridad</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-key"></span>&nbsp;Acceso</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-alarm"></span>&nbsp;Alertas y notificaciones</Link>
                                </li>
                                <li className="nav-item">
                                    <Language></Language>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="collapsecont" className="panel-collapse collapse hidden-md-up">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-comment-discussion"></span>&nbsp;Comentarios generales</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-question"></span>&nbsp;Ayuda con el sitio web</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }
}
