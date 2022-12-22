import React from "react"; 
import { Navbar, Navitem } from "../navbar";
import { Dropdown, DropdownMenu, DropdownItem  } from "../dropdown";
import '../../../sass/styles.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__image" src="/images/header/header-logo.jpg" />
            </div>
            <h2 className="header__title">
                Color Code
            </h2>
            <Navbar>
                <Navitem title="Home" />
                <Navitem title="Browse" />
                <Dropdown title="Color">
                    <DropdownMenu>
                        <DropdownItem title="Color indoor"/>
                        <DropdownItem title="Color outdoor"/>
                        <DropdownItem title="Test 3"/>
                    </DropdownMenu>
                </Dropdown>
            </Navbar>
            <div className="header__logo">
                <img className="header__image--right" src="/images/header/header-logo.jpg" />
            </div>
        </div>
    )
}

export default Header;