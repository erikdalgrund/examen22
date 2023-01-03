import React from "react"; 
import { Navbar, Navitem } from "../navbar";
import { Dropdown, DropdownMenu, DropdownItem  } from "../dropdown";
import { Link } from "react-router-dom";
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
                <Link to="/"> <Navitem title="Home" /> </Link>
                <Link to="/faq"> <Navitem title="FAQ"/> </Link>
                <Dropdown title="Color">
                    <DropdownMenu>
                        <Link to="/indoor"> <DropdownItem title="Color indoor"/> </Link>
                        <Link to="/outdoor"> <DropdownItem title="Color outdoor"/> </Link>
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