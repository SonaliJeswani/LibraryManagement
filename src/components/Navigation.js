import React from "react";
import logoBook from "./logoBook.png"
import { Switch, Route, Link } from "react-router-dom";

function Navigation() {
    return <nav  className="navbar navbar-expand-sm  navbar-light" id="navigate">

        <a className="navbar-brand" ><img src={logoBook} alt="Logo" height={20} width={20} /> MyBrary</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link to={"/"} className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={"/about"} className="nav-link">
                        About us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/contact"} className="nav-link">
                        Contact Us
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                        Admin
                    </Link>
                </li>
            </ul>
            <form className="form-inline ml-auto">
                <Link to={"/contact"} >
                    <button className="btn btn-sm btn-outline" type="button">Sign in</button>
                </Link>
                <Link to={"/signup"} >
                    <button className="btn btn-sm button-custom" type="button">Sign Up</button>
                </Link>
            </form>
        </div>

    </nav>


}

export default Navigation;