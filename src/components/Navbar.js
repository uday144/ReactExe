import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-sm navbar-dark">


                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Link1">Link 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Link2">Link 2</Link>
                        </li>

                    </ul>
                </nav>


            </div>
        );
    }

}

export default Navbar;