import React, { useState } from 'react';
import about_image from '../../assets/about_me.png';
import Skills from './Skills';
import Extracurriculars from './Extracurriculars';
import Education from './Education';

const AboutMe = () => {
    // Manages the active section: "skills", "extracurriculars", or "education"
    const [activeSection, setActiveSection] = useState('skills');

    const handleSectionChange = (section) => {
        console.log(section);
        setActiveSection(section);
    };

    // Define the text content as variables
    const headerText = 'init(self)';
    const userName = 'CELINE TRIEU';
    const descriptionText = `
        is currently a computer science student at UCI.
        She is originally from San Diego, CA, and has been there most of her life. 
        She comes from a big Viet-Chinese family and has three other siblings with whom she is very close to.
        She loves watching crime and drama TV shows and enjoys playing lacrosse, thrifting clothes, and reading.
    `;
    const sectionTitles = {
        skills: 'Skills',
        extracurriculars: 'Extracurriculars',
        education: 'Education'
    };

    return (
        <div id="about-me">
            <div className="about-me-page">
                <p className="user-header media">{headerText}</p>
                <div className="left-container">
                    <div className="user-image">
                        <img src={about_image} alt="user" className="about-image" />
                    </div>
                    <div className="user-socials" id="laptop-social">
					    <iframe title="Spotify Playlist" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/0wwq6fvlucZxNt1J0VNOUC?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				    </div>
                </div>
                <div className="user-content">
                    <p id="user-header" className="user-header">{headerText}</p>
                    <p className="user-description">
                        <span className="user-name">{userName}</span> {descriptionText}
                    </p>
                    {/* Section selection buttons */}
                    <div className="user-table">
                        <div className="sections">
                            <p
                                className={activeSection === 'skills' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('skills')}
                            >
                                {sectionTitles.skills}
                            </p>
                            <p
                                className={activeSection === 'extracurriculars' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('extracurriculars')}
                            >
                                {sectionTitles.extracurriculars}
                            </p>
                            <p
                                className={activeSection === 'education' ? 'section-name selected-section' : 'section-name'}
                                onClick={() => handleSectionChange('education')}
                            >
                                {sectionTitles.education}
                            </p>
                        </div>

                        {/* Section content */}
                        {activeSection === 'skills' && <Skills />}
                        {activeSection === 'extracurriculars' && <Extracurriculars />}
                        {activeSection === 'education' && <Education />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
