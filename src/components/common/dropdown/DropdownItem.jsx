import React, { useState } from "react";

function DropdownItem(props) {

    const [open, setOpen] = useState(false);

    return (
        <nav className="dropdown-menu--item dropdown-btn--item" onClick={() => setOpen(!open)}>
                { props.title }
            { open && props.children}
        </nav>
    )
}

export default DropdownItem;