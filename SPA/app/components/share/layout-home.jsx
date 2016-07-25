import React from 'react';
import Footer from './footer.jsx';
import Navbar from '../home/navbar.jsx';
import PublicityBar from './publicitybar.jsx';
import Publicity from './publicity.jsx';

class LayoutHome extends React.Component {
    render() {
        return (
            <div className="div-cont">
                <Navbar></Navbar>
                <div className="container" id="container-home">
                    {this.props.children}
                    <PublicityBar></PublicityBar>
                    <Publicity></Publicity>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default LayoutHome;
