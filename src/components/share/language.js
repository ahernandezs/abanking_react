import React from 'react';

class Language extends React.Component {
    render() {
        return (
            <div id="language" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="language" aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h5 className="modal-title">Idioma</h5>
                        </div>
                        <div className="container">
                            <div className="divider"></div>
                            <p>Seleccione el idioma de su preferencia.</p>
                            <div className="row">
                                <div className="col-xs-6">
                                    <button type="button" className="btn btn-language btn-block" data-dismiss="modal">Español</button>
                                </div>
                                <div className="col-xs-6">
                                    <button type="button" className="btn btn-language btn-block" data-dismiss="modal">Inglés</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Language;
