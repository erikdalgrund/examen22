import React from "react";

function DropdownMenu( props ) {
    return (
        <div className="dropdown-menu">
            <nav className="dropdown-menu--items">
                {props.children}
            </nav>
        </div>
    )
}

export default DropdownMenu;