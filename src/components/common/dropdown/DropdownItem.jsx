import React from "react";

function DropdownItem(props) {

    return (
        <nav className="dropdown-menu--item dropdown-btn--item" >
                { props.title }
            { props.children}
        </nav>
    )
}

export default DropdownItem;
