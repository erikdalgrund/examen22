import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-partners">
                <p>Our partners:</p>
                <div className="footer-images">
                    <img src="/images/footer/casadeco.jpg" />
                    <img src="/images/footer/dekora.jpg" />
                    <img src="/images/footer/pergo.jpg" />
                    <img src="/images/footer/forbo.jpg" />
                </div>
            </div>
            <div className="footer-follow">
                <ul className="footer-follow--icons">
                    <li><p>Follow us!</p></li>
                    <li><FaFacebook className="icon"/></li>
                    <li><FaInstagram className="icon"/></li>
                    <li><FaTwitter className="icon"/></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p className="footer-bottom--title">Color code</p>
                <p>est 2022 in Stockholm</p>
                <p>&copy; Erik Dalgrund</p>
            </div>
        </div>
    )
}

export default Footer;