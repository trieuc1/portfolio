import React from 'react';
import JourneyItem from './JourneyItem';

const Journey = () => {
    // List of journey items to be displayed, each with title, role, date, and description
    const journeys = [
        {
            title: "Little Caesars",
            role: "Assistant Shift Lead",
            date: "Nov 2021 - Jun 2023",
            description: "One of my first jobs was working at Little Caesars as an Assistant Shift Lead. This experience taught me the importance of having a strong, cooperative team and effective communication.",
            isLeftAligned: true
        },
        {
            title: "WICS",
            role: "Secretary",
            date: "Sept 2022 - Present",
            description: "WICS (Women in Information and Computer Science) has profoundly shaped my college experience. It inspired me to join mentorship programs and committees, eventually becoming Secretary.",
            isLeftAligned: false
        },
        {
            title: "Pinterest",
            role: "Engage Scholar",
            date: "Aug 2023 - Present",
            description: "The Engage program at Pinterest helped me prepare for internships and interviews. It also taught me how to leverage available resources effectively.",
            isLeftAligned: true
        },
        {
            title: "OOTify",
            role: "Development Co-Lead",
            date: "Feb 2024 - Present",
            description: "OOTify is a mental health startup. My internship there has taught me much of what I know as a developer and gave me invaluable experience leading a team.",
            isLeftAligned: false
        }
    ];

    return (
        <div id="journey" className="journey-page">
            <div className="line"></div> {/* A vertical line representing the timeline */}
            <div className="journey-containers">
                {journeys.map((journey, index) => (
                    <JourneyItem
                        key={index}
                        title={journey.title}
                        role={journey.role}
                        date={journey.date}
                        description={journey.description}
                        isLeftAligned={journey.isLeftAligned}
                    />
                ))}
            </div>
        </div>
    );
};

export default Journey;
