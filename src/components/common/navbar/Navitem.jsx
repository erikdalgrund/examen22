import React from "react";

function Navitem(props) {

    return (
        <li className="nav-item">
            <a href="#">
                { props.title }
            </a>
        </li>
    )
}

export default Navitem;
