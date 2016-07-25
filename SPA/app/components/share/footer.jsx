import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" id="footerLog">
                <div className="container-fluid">
                    <div className="row text-xs-center">
                        <div className="col-sm-5 col-xl-3">
                            <p>&copy; 2016 Anzen Soluciones S.A. de C.V.</p>
                        </div>
                        <div className="col-sm-7 col-xl-4 col-xl-offset-5">
                            <p>
                                <a href="">Aviso legal</a>&nbsp;|&nbsp;
                                <a href="">Sucursales</a>&nbsp;|&nbsp;
                                <a href="">Cont&aacute;ctanos</a>&nbsp;|&nbsp;
                                <a href="">Ayuda</a>&nbsp;
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
