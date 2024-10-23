import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Journey from './components/Journey/Journey';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
    const [clipPath, setClipPath] = useState('polygon(7% 7%, 5% 5%, 100% 100%, 20% 100%)');

    useEffect(() => {
        const sections = document.querySelectorAll('.transition-section');

        const observerOptions = {
            threshold: 0.1, // When 10% of a section is visible, trigger the change
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("hello");
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
            case 'about-me':
                return 'polygon(10% 10%, 5% 5%, 90% 100%, 25% 100%)';
            case 'journey':
                return 'polygon(15% 15%, 10% 10%, 85% 100%, 30% 100%)';
            case 'portfolio':
                return 'polygon(20% 20%, 15% 15%, 80% 100%, 35% 100%)';
            default:
                return 'polygon(7% 7%, 5% 5%, 100% 100%, 20% 100%)';
        }
    };
    

    return (
        <div className="App">
            <div className="spotlight-shape" style={{clipPath}}></div>
            <Navbar />
            <div id="home" className="transition-section">
                <Home />
            </div>
            <div id="about-me" className="transition-section">
                <AboutMe />
            </div>
            <div id="journey" className="transition-section">
                <Journey />
            </div>
            <div id="portfolio" className="transition-section">
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

export default App;
