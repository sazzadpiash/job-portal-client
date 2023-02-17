import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/about-us" className="link link-hover">
                        About us
                    </Link>
                    <Link to="/contact-us" className="link link-hover">
                        Contact
                    </Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://www.youtube.com/channel/UCVeggXTlytoGAUUfWtqYWag">
                            <IoLogoYoutube className="text-3xl"></IoLogoYoutube>
                        </Link>
                        <Link to="https://www.linkedin.com/in/sazzad-piash/">
                            <IoLogoLinkedin className="text-3xl"></IoLogoLinkedin>
                        </Link>
                        <Link to="https://www.facebook.com/sazzad.hossain.5422/">
                            <IoLogoFacebook className="text-3xl"></IoLogoFacebook>
                        </Link>
                    </div>
                </div>
                <div>
                    <p>
                        Copyright © 2023 - All right reserved by Job Portal Ltd
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
