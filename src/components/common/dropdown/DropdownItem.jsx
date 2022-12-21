import React, { useState } from "react";

function DropdownItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <li className="dropdown-menu--item">
            <a href="#" className="dropdown-btn--item" onClick={() => setOpen(!open)}>
                { props.title }
            </a>

            { open && props.children}
        </li>
    )
}

export default DropdownItem;