import React from 'react';
import ContactForm from './ContactForm';
import Socials from './Socials';

const Footer = () => {
    return (
        <div id="footer" className="footer">
            <p className="social-header">CONTACT ME</p>
            <div className="contact-me-container">
                {/* Contact Form */}
                <ContactForm />
                
                {/* Social Links */}
                <Socials />
            </div>
            <p className="copyright-text">©2024 by Celine Trieu | Made with React, HTML, CSS</p>
        </div>
    );
};

export default Footer;
