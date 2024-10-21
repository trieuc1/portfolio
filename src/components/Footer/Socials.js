import React from 'react';
import email_icon from '../../assets/email_icon.png';
import resume_icon from '../../assets/resume_icon.png';
import white_github from '../../assets/white_github.png';
import linkedin_icon from '../../assets/linkedin_icon.png';


const socialLinks = [
    {
        icon: email_icon,
        label: 'EMAIL',
        url: 'mailto:ctrieu87@gmail.com'
    },
    {
        icon: resume_icon,
        label: 'RESUME',
        url: 'https://docs.google.com/document/d/1898lGThmXjjsmz3QDc7HeTxRveVbT2NPvK0A5aA18kE/edit?usp=sharing'
    },
    {
        icon: white_github,
        label: 'GITHUB',
        url: 'https://github.com/trieuc1'
    },
    {
        icon: linkedin_icon,
        label: 'LINKEDIN',
        url: 'https://www.linkedin.com/in/-celine-trieu/'
    }
];

const Socials = () => {
    return (
        <div className="socials">
            {socialLinks.map((social, index) => (
                <div key={index} className="social">
                    <img
                        className="social-icon"
                        alt={social.label.toLowerCase()}
                        src={social.icon}
                        onClick={() => window.open(social.url)}
                    />
                    <p className="social-text">{social.label}</p>
                </div>
            ))}
        </div>
    );
};

export default Socials;
