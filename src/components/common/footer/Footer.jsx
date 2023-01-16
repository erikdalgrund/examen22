import React from "react";
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-info">
                <div className="footer-partners">
                    <div className="footer-images">
                        <p>Proud partners with</p>
                        <img src="/images/footer/casadeco.jpg" />
                        <img src="/images/footer/dekora.jpg" />
                        <img src="/images/footer/pergo.jpg" />
                        <img src="/images/footer/forbo.jpg" />
                    </div>
                </div>
                <div className="footer-aboutUs">
                    <h3>Color Code</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Facilis soluta placeat quibusdam odit quis quos rerum eaque, 
                        laboriosam totam culpa, at repellat quas harum magnam quasi 
                        tempora animi ut voluptates obcaecati, molestias expedita sunt.
                        Animi molestiae inventore veniam, optio voluptate expedita ipsa
                        accusantium nam omnis qui fugiat, magni sapiente iusto.
                    </p>
                </div>
                <div className="footer-follow">
                    <ul className="footer-follow--icons">
                        <li><p>Follow us!</p></li>
                        <li><FaFacebook className="icon"/></li>
                        <li><FaInstagram className="icon"/></li>
                        <li><FaTwitter className="icon"/></li>
                    </ul>
                </div>
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
