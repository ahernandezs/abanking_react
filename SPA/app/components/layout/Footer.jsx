import React from 'react';

class Footer extends React.Component {
    render() {
        var mainContainer = {
            minHeight: '100%',
            height: 'auto !important',
            height: '100%',
            margin: '0 auto -35px'
        };
        return (
            <div className="footer" id="footerLog">
                <div className="container-fluid">
                    <div className="row text-xs-center">
                        <div className="col-sm-5 col-xl-3">
                            <p>&copy; 2016 Anzen Soluciones S.A. de C.V.</p>
                        </div>
                        <div className="col-sm-7 col-xl-4 col-xl-offset-5">
                            <p>
                                <a href="#">Aviso legal</a> |
                                <a href="#">&nbsp;Sucursales</a> |
                                <a href="#">&nbsp;Cont&aacute;ctanos</a> |
                                <a href="#">&nbsp;Ayuda</a>
                                <select className="form-control">
                                    <option>Lenguaje</option>
                                    <option>Español</option>
                                    <option>Ingl&eacute;s</option>
                                </select>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;