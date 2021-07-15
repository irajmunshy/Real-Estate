import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <Link class="navbar-brand marginLeft" to="/"> <img src={logo} alt="RandomImg" /> </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end marginRight" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active" to="/">Home+</Link>
                        </li>
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active" to="/">About+</Link>
                        </li>
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active " to="/">Shop+</Link>
                        </li>
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active" to="/">News+</Link>
                        </li>
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active" to="/">Pages+</Link>
                        </li>
                        <li class="nav-item navbar-margin">
                            <Link class="nav-link active" to="/">Contact</Link>
                        </li>
                        <li className="nav-item Add-button">
                            <Link className="nav-link active text-white" to="/">Add Listed</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;