import React from "react"; 
import '../../../sass/styles.scss';

function Header() {
    return (
        <div class="header">
            <h2 class="header__title">
                LoL Corporate
            </h2>
            <ul class="header__navbar">
                <li><a href="#" class="header__navbar--items">Home</a></li>
                <li><a href="#" class="header__navbar--items">Cart</a></li>
                <li><a href="#" class="header__navbar--items">Shop</a></li>
                <li><a href="#" class="header__navbar--items">About</a></li>
            </ul>
        </div>
    )
}

export default Header;