import React, { useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Journey from './components/Journey/Journey';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
    useEffect(() => {
        const sections = document.querySelectorAll('.transition-section');

        const observerOptions = {
            threshold: 0.1, // Adjust this value to determine when the animation is triggered
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
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

    return (
        <div className="App">
            <Navbar />
            <div className="transition-section">
                <Home />
            </div>
            <div className="transition-section">
                <AboutMe />
            </div>
            <div className="transition-section">
                <Journey />
            </div>
            <div className="transition-section">
                <Portfolio />
            </div>
            <Footer />
        </div>
    );
}

export default App;
