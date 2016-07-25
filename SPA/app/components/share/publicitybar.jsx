import React from 'react';

class PublicityBar extends React.Component {
    render() {
        return (
            <div className="row hidden-md-down" id="publibar">

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src="../app/assets/images/publicity/banner-viaje.png" className="img-fluid center-block" alt="Publicity"></img>
                            <a href="#" className="btn btn-secondary btn-sm">Ver detalle</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src="../app/assets/images/publicity/banner-ishop.png" className="img-fluid center-block" alt="Publicity"></img>
                            <a href="#" className="btn btn-secondary btn-sm">Conoce más</a>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src="../app/assets/images/publicity/banner-rogerwaters.png" className="img-fluid center-block" alt="Publicity"></img>
                            <a href="#" className="btn btn-secondary btn-sm">Ver oferta</a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PublicityBar;
