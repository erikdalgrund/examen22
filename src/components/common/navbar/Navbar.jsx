import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar">
            <span className="navbar-nav"> {props.children} </span>
        </nav>
    )
}

export default Navbar 
