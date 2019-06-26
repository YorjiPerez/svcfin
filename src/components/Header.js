import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './resourses/images/logo.png';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white w-100 shadow-sm">
                    <Link className="navbar-brand mr-auto mr-lg-0" to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                    <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/page-contruction">What we finance</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/page-contruction">Dealer login</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Calculators</a>
                                <div className="dropdown-menu  bg-primary-default" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/page-contruction">Solar loan calculators</Link>
                                    <Link className="dropdown-item" to="/page-contruction">Payment calculator</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item hidden-md">
                                <Link className="nav-link btn-link" to="/page-contruction">Make a payement</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;