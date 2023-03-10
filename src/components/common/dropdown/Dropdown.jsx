import React, { useState } from "react";

function Dropdown(props) {

    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown dropdown-btn" onMouseEnter={() => setOpen(!open)}>
                { props.title }
            { open && props.children}
        </div>
    )
}

export default Dropdown;
