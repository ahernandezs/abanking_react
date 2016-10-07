import React, { Component } from 'react';
import Footer from './footer.js';
import Navbar from './navbar.js';

class LayoutHome extends Component {
  render() {
    return (
        <div className="div-cont">

            <Navbar></Navbar>

            <div id="container-home" className="container">
                {this.props.children}
            </div>

            <Footer></Footer>

        </div>
    );
  }
}

export default LayoutHome;
