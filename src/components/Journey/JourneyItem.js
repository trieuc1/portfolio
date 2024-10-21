import React, { useState } from 'react';
import journey_star from '../../assets/journey_star.png'; // You can pass this image as a prop too if needed.

const JourneyItem = ({ title, role, date, description, isLeftAligned }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div 
            className="journey" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <div className="timeline">
                <div className="dot"></div>
                <p className={`timeline-date ${isLeftAligned ? 'left' : ''}`}>{date}</p>
            </div>
            <img src={journey_star} alt="journey star" className="journey-star" />
            <p className="journey-text">
                {role}<br/>{title}
            </p>
            {/* Hovered details */}
            <div className="journey-hover" style={{ display: isHovered ? 'flex' : 'none' }}>
                <p className="journey-hover-header">{title.toUpperCase()}</p>
                <p className="journey-hover-text">{description}</p>
            </div>
        </div>
    );
};

export default JourneyItem;
