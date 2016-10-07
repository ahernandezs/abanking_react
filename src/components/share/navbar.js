import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="navbar" className="navbar navbar-full navbar-dark">
                <div className="container panel">

                    <div className="navbar-brand logo-abanking hidden-sm-down"></div>
                    <button className="navbar-toggler collapsed hidden-md-up"                       type="button" data-toggle="collapse" data-parent="#navbar" href="#collapsemenu" aria-expanded="false" aria-controls="collapsemenu">&#9776;</button>
                    <button className="navbar-toggler collapsed hidden-md-up pull-xs-right p-x-1"   type="button" data-toggle="collapse" data-parent="#navbar" href="#collapsecont" aria-expanded="false" aria-controls="collapsecont"><span className="icon-question"></span></button>
                    <button className="navbar-toggler collapsed hidden-md-up pull-xs-right"         type="button" data-toggle="collapse" data-parent="#navbar" href="#collapseconf" aria-expanded="false" aria-controls="collapseconf"><span className="icon-cog"></span></button>

                    <div className="collapse navbar-toggleable-sm">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active">Cuentas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Inversiones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Impuestos</a>
                            </li>
                            <li className="nav-item pull-md-right">
                                <div className="nav-link">
                                    <span>Sergio Consuelo Ortiz</span>
                                    <span>
                                        <div className="dropdown">
                                            <span className="navbar-toggler icon-cog" id="config1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                                            <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="config1" id="globo1">
                                                <p>Preferencias</p>
                                                <p>Configura tus alertas o has un tour por el sistema.</p>
                                                <div className="row">
                                                    <div className="col-xs-6">
                                                        <a href="#"><div className="circle"><div className="icon-wrench"></div><p>Ajustes</p></div></a>
                                                    </div>
                                                    <div className="col-xs-6">
                                                        <a href="#"><div className="circle"><div className="icon-binoculars"></div><p>Tour</p></div></a>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <a className="btn btn-info btn-sm btn-block">Cerrar sesión</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                    <span>
                                        <div className="dropdown">
                                            <span className="navbar-toggler icon-question" id="contact1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></span>
                                            <div className="dropdown-menu dropdown-menu-right shadow" aria-labelledby="contact1" id="globo2">
                                                <p>Estamos en contacto</p>
                                                <p>Nuestros asesores están disponibles para asesorarte.</p>
                                                <div className="row">
                                                    <div className="col-xs-4">
                                                        <a href="#"><div className="circle"><div className="icon-bubbles3"></div><p>Chat</p></div></a>
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <a href="#"><div className="circle"><div className="icon-envelop"></div><p>Email</p></div></a>
                                                    </div>
                                                    <div className="col-xs-4">
                                                        <a href="#"><div className="circle"><div className="icon-mobile2"></div><p>Móvil</p></div></a>
                                                    </div>
                                                </div>
                                                <br></br>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="form-group icon-form">
                                                            <div className="icon-search icon-sm"></div>
                                                            <input className="form-control form-control-sm" type="text" placeholder="¿Qué deseas hacer?"></input>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="collapsemenu" className="panel-collapse collapse hidden-md-up">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active">Cuentas</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Inversiones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Impuestos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Cerrar sesión</a>
                            </li>
                        </ul>
                    </div>

                    <div id="collapseconf" className="panel-collapse collapse hidden-md-up">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Ajustes</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Tour</a>
                            </li>
                        </ul>
                    </div>

                    <div id="collapsecont" className="panel-collapse collapse hidden-md-up">
                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Email</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Móvil</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;
