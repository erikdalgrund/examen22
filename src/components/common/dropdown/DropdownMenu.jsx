import React from "react";

function DropdownMenu( props ) {
    return (
        <div className="dropdown-menu">
            <ul className="dropdown-menu--items">
                {props.children}
            </ul>
        </div>
    )
}

export default DropdownMenu;