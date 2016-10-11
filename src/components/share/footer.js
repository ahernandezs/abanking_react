import React from 'react';
import { Link } from 'react-router';
import Language from './language.js';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <Language></Language>
                <div className="container-fluid">
                    <div className="row">
                        <div className="footer-left col-xs-12 col-sm-7">
                            <p>&copy; 2016 Anzen Soluciones S.A. de C.V.</p>
                        </div>
                        <div className="footer-right col-xs-12 col-sm-5">
                            <p>
                                <Link to="" activeClassName="active" className="link">Ayuda</Link>
                                <Link to="" activeClassName="active" className="link">Contácto</Link>
                                <Link to="" activeClassName="active" className="link">Privacidad</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
