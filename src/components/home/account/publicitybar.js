import React from 'react';

import banner1 from '../../../images/publicity/banner-viaje.png';
import banner2 from '../../../images/publicity/banner-ishop.png';
import banner3 from '../../../images/publicity/banner-rogerwaters.png';

class Publicitybar extends React.Component {
    render() {
        return (
            <div id="publicity" className="row hidden-md-down">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src={banner1} className="img-fluid center-block" alt="Publicity" />
                            <a href="#" className="btn btn-adsb btn-sm">Ver detalle</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src={banner2} className="img-fluid center-block" alt="Publicity" />
                            <a href="#" className="btn btn-adsb btn-sm">Conoce más</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-block">
                            <img src={banner3} className="img-fluid center-block" alt="Publicity" />
                            <a href="#" className="btn btn-adsb btn-sm">Ver oferta</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Publicitybar;
