import React from "react"; 
import { Navbar, Navitem } from "../navbar";
import { Dropdown, DropdownMenu, DropdownItem  } from "../dropdown";
import '../../../sass/styles.scss';

function Header() {
    return (
        <div>
            <h2>
                LoL Corporate
            </h2>
            <Navbar>
                <Navitem title="Home" />
                <Navitem title="Browse" />
                <Dropdown title="Help">
                    <DropdownMenu>
                        <DropdownItem title="Test 1"/>
                        <DropdownItem title="Test 2"/>
                        <DropdownItem title="Test 3"/>
                    </DropdownMenu>
                </Dropdown>
            </Navbar>
        </div>
    )
}

export default Header;