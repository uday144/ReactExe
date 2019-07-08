import React, { Component } from 'react';
import logo from '../images/logo.png'
class Header2 extends Component {

    render() {
        return (
            <header className = "row">
            <div className = "col-md-7"> 
                <img className="logo" src={logo} alt="logo" /> 
                </div>
                <div className = "btn-login-register col-md-5"> 
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-danger">Danger</button>
                </div>
            </header>
        );  
    }

}

export default Header2;