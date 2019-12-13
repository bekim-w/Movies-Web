import React from 'react';
import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import Logo from "../Logo/Logo";

function Footer() {
    return (
        <footer className="page-footer font-small">
            <div className="container">
                <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="footer-logo pb-4">
                            <Logo />
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-right">
                        <a href="#" className="facebook">
                            <FontAwesomeIcon className="faFacebookF" icon={faFacebookF} />
                        </a>
                        <a href="#" className="twitter">
                            <FontAwesomeIcon className="faTwitter" icon={faTwitter} />
                        </a>
                        <a href="#" className="instagram">
                            <FontAwesomeIcon className="faInstagram" icon={faInstagram} />
                        </a>
                        <a href="#" className="google">
                            <FontAwesomeIcon className="faGooglePlusG" icon={faGooglePlusG} />
                        </a>
                    </div>
                </div>
            </div>
            
            <hr />

            <div className="footer-copyright text-center py-3">&copy; MovieHouse 2019
            </div>
        </footer>
    );
}

export default Footer;