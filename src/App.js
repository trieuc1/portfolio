import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Journey from './components/Journey/Journey';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import OOTifyGif from './assets/reportspage.gif';

function App() {
    const [clipPath, setClipPath] = useState('polygon(6% 7%, 5% 6%, 100% 100%, 20% 100%)');

    useEffect(() => {
        const sections = document.querySelectorAll('.transition-section');

        const observerOptions = {
            threshold: 0.1, // When 10% of a section is visible, trigger the change
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log(entry);
                    // Change clip-path based on the section being intersected
                    const newClipPath = generateClipPath(entry.target);
                    setClipPath(newClipPath);

                    // Optionally, you can add 'active' class to animate sections
                    entry.target.classList.add('active');
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    // Function to generate a new clip-path based on the section
    const generateClipPath = (section) => {
        switch (section.id) {
            case 'about-me-content':
                return 'polygon(6% 7%, 10% 100%, 0% 100%, 90% 120%)';
            case 'journey-content':
                return 'polygon(6% 7%, 10% 130%, 0% 100%, 90% 160%)';
            case 'portfolio-content':
                return 'polygon(6% 7%, -30% 710%, 0% 100%, 60% 160%)';
            default:
                return 'polygon(6% 7%, 5% 6%, 100% 100%, 20% 100%)';
        }
    };
    

    return (
        <div className="App">
            <div className="spotlight-shape" style={{clipPath}}></div>
            <Navbar />
            <div id="home-content" className="transition-section">
                <Home />
            </div>
            <div id="about-me-content" className="transition-section">
                <AboutMe />
            </div>
            <div id="journey-content" className="transition-section">
                <Journey />
            </div>
            <img src={OOTifyGif} style={{ width: "80%", marginTop: "20rem" }} alt="OOTify Admin Page" />
            <p style={{marginBottom: "5rem", marginTop: "2rem", fontSize:"calc(0.6rem + 0.7vh)", fontFamily: "Inter", letterSpacing: "0.1rem", fontWeight: "600"}}>OOTify Admin Page</p>
            <div id="portfolio-content" className="transition-section">
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

export default App;
