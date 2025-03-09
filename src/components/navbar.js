import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/portofolio">Portofolio</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar;