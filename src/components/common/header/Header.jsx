import React from "react"; 
import { Navbar, Navitem } from "../navbar";
import { Dropdown, DropdownMenu, DropdownItem  } from "../dropdown";
import { Link } from "react-router-dom";
import '../../../sass/styles.scss';

function Header() {
    return (
        <div className="header">
            <div className="header__top">
                <div className="header__logo">
                    <img className="header__image" src="/images/header/cartoon-brush-.jpg" />
                </div>
                <Link to="/login"> <Navitem title="Login" /> </Link>
                <Link to="/cart"> <Navitem title="Cart" /> </Link>
            </div>
            <div className="header__content">
                <div className="header__left">
                    <div className="header__title">
                        <p className="header__title--color">
                            Color 
                        </p>
                        <p className="header__title--code">
                            Code
                        </p>
                    </div>
                </div>
                <Navbar>
                    <Link to="/"> <Navitem title="Home" /> </Link>
                    <Link to="/faq"> <Navitem title="FAQ"/> </Link>
                    <Dropdown title="Shop">
                        <DropdownMenu>
                            <Link to="/indoor"> <DropdownItem title="Color indoor"/> </Link>
                            <Link to="/outdoor"> <DropdownItem title="Color outdoor"/> </Link>
                            <Link to="/tools"> <DropdownItem title="Tools"/> </Link>
                            <DropdownItem title="Test 3"/>
                        </DropdownMenu>
                    </Dropdown>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;