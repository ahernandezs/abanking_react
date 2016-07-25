import React from 'react';
import Footer from './footer.jsx';

class LayoutLogin extends React.Component {
    render() {
        return (
            <div className="div-cont">
                <div className="dark-line">
                    <div className="line-head"></div>
                </div>
                <div className="container" id="container-login">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default LayoutLogin;
