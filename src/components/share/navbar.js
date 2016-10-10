import React from 'react';
import { Link } from 'react-router';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-full shadow-second">
                <div className="container panel">

                    <div className="navbar-brand logo-abanking hidden-sm-down"></div>
                    <button className="hidden-md-up"                data-target="#collapsemenu" data-toggle="collapse" type="button" aria-expanded="false" aria-controls="collapsemenu" data-parent="#navbar">&#9776;</button>
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
                                            <li><Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-basket"></span>&nbsp;&nbsp;Pago de servicios</Link></li>
                                            <li><Link to="/accounts" activeClassName="active" className="btn btn-navbar"><span className="icon-credit-card"></span>&nbsp;&nbsp;Pago de créditos</Link></li>
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
                                        <div className="globo-men dropdown-menu dropdown-menu-right shadow-second" aria-labelledby="dropdowncot">
                                            <p>Contácto</p>
                                            <p>En proceso</p>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <button className="btn" type="button" id="dropdowncog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="icon-gear"></span>
                                        </button>
                                        <div className="globo-men dropdown-menu dropdown-menu-right shadow-second" aria-labelledby="dropdowncog">
                                            <p>Configuración</p>
                                            <p>En proceso</p>
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
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Cuentas</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Inversiones</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical">Pagos</Link>
                                    <ul className="nav-second nav navbar-nav">
                                        <li className="nav-item"><Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-basket"></span>&nbsp;&nbsp;Pago de servicios</Link></li>
                                        <li className="nav-item"><Link to="/accounts" activeClassName="active" className="btn btn-navbar-vertical"><span className="icon-credit-card"></span>&nbsp;&nbsp;Pago de créditos</Link></li>
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
                                    <a className="nav-link active">Ajustes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Tour</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div id="collapsecont" className="panel-collapse collapse hidden-md-up">
                        <div className="container">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active">Chat</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Email</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Móvil</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;
