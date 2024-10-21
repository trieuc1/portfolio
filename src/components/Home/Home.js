import React, { useState, useEffect } from 'react';
import user_image from '../..//assets/home_image.png';

const Home = () => {
    const [backgroundSize, setBackgroundSize] = useState('contain');

    useEffect(() => {
        const handleResize = () => {
            setBackgroundSize(window.innerWidth <= 768 ? 'auto' : 'contain');
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const homeImageStyle = {
        backgroundImage: `url(${user_image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: backgroundSize,
        backgroundPosition: 'right bottom',
        height: '100%',
        width: '100%',
    };

    return (
        <div id="home" className="home-page" style={homeImageStyle}>
            <div className="home-text">
                <p className="home-text-white">hi! my name is celine trieu.</p>
                <div className="typewriter">
                    <p className="home-text-tan">i'm a software engineer</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
