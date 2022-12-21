import React, { useState } from "react";

function Dropdown(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="dropdown">
            <a href="#" className="dropdown-btn" onClick={() => setOpen(!open)}>
                { props.title }
            </a>

            { open && props.children}
        </li>
    )
}

export default Dropdown;