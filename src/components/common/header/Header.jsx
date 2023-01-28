import React from "react"; 
import { Navbar, Navitem } from "../navbar";
import { Dropdown, DropdownMenu, DropdownItem  } from "../dropdown";
import { Link } from "react-router-dom";
import '../../../sass/styles.scss';

function Header() {

    return (
        <div className="header">
            <div className="header__top">

                <Link to="/login"> <Navitem title="Login / Register" /> </Link>
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
                    <Dropdown title="Shop">
                        <DropdownMenu>
                            <Link to="/indoor"> <DropdownItem title="Color indoor"/> </Link>
                            <Link to="/outdoor"> <DropdownItem title="Color outdoor"/> </Link>
                            <Link to="/tools"> <DropdownItem title="Tools"/> </Link>
                        </DropdownMenu>
                    </Dropdown>
                    <Link to="/faq"> <Navitem title="FAQ"/> </Link>
                </Navbar>
            </div>
        </div>
    )
}

export default Header;