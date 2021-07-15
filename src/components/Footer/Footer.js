import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faEnvelope, faLocationArrow, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import footerLogo from '../../images/logo-2.png';
import payment from '../../images/payment-4.png';
import './Footer.css';
import FooterCol from './FooterCol';
const Footer = () => {
    const noNamed = []
    const company = [
        { name: "About" },
        { name: "Blog" },
        { name: "All Products" },
        { name: "Locations Map" },
        { name: "FAQ" },
        { name: "Contact US" },
    ]
    const service = [
        { name: "Order Tracking" },
        { name: "Wish List" },
        { name: "Login" },
        { name: "My Account" },
        { name: "Terms & Condition" },
        { name: "Promotional Offers" },
    ]
    const CustomerCare = [
        { name: "login" },
        { name: "My Account" },
        { name: "Wish List" },
        { name: "Ordertracking" },
        { name: "FAQ" },
        { name: "Contact US" }
    ]
    const newsletter = []
    return (
        <footer className="Footer-area clear-both">
            <div className="middleContainer justify-content-center d-flex">
                <div className="ContainerDiv d-flex">
                    <div>
                        <h1 style={{ fontWeight: "bold", }}>Looking for a dream home?</h1>
                        <p>We help you make the dream of new house a reality</p>
                    </div>
                    <div>
                        <button className="explorebtn">Explore Properties <FontAwesomeIcon icon={faArrowRight} /> </button>
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <div className="row py-5 MainContainer">
                    <FooterCol key={1} menuTitle={" "} img={footerLogo} manuItems={noNamed}>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p>
                        <div className="iconContainer">
                            <div className="locationIcon">
                                <FontAwesomeIcon className="icon" icon={faLocationArrow} /> <span className="ms-3 text-white">Brooklyn, New York, United States</span> <br />
                                <FontAwesomeIcon className="icon" icon={faPhoneAlt} /> <span className="ms-3 text-white">+0123-456789</span> <br />
                                <FontAwesomeIcon className="icon" icon={faEnvelope} /> <span className="ms-3 text-white">example@example.com</span>
                            </div><br />
                            <ul className="social-media list-inline">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon m-2" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon m-2" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon m-2" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </FooterCol>
                    <FooterCol key={2} menuTitle={"Company"} manuItems={company} />
                    <FooterCol key={3} menuTitle={"Service"} manuItems={service} />
                    <FooterCol key={4} menuTitle={"Customer Care"} manuItems={CustomerCare} />
                    <FooterCol key={5} menuTitle={"News Letter"} manuItems={newsletter}>
                        <div class="search-container">
                            <div><p className="text-white">Subscribe to our weekly Newsletter and receive updates via email.</p></div>
                            <form action="/">
                                <input className="fieldStyle" type="text" placeholder="Email*" /><button type="submit"> <FontAwesomeIcon icon={faLocationArrow} /></button>
                            </form><br />
                            <div>
                                <h4 className="text-white">We Accept</h4>
                                <img src={payment} alt="" height="50px" width="300px" />
                            </div>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-white text-center">
                    <div className="d-flex justify-content-around">
                        <p className="footerMargin">Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                        <p className="footerMargin">Terms  &nbsp; &  &nbsp; Conditions  &nbsp; Claim  &nbsp; Privacy & Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;