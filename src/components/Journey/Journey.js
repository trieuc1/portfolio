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
            description: "The Engage Program at Pinterest helped me feel prepared for internships and interviews by giving me the confidence and resources to practice. It also taught me how to leverage available resources effectively.",
            isLeftAligned: true
        },
        {
            title: "OOTify",
            role: "Development Co-Lead",
            date: "Feb 2024 - ",
            description: "OOTify is a mental health startup that hopes to provide accessible resources for those in need. My internship there has taught me much of what I know as a full-stack developer and gave me invaluable experience leading a team. During my time there, I used Django, MongoDB, HTML, CSS, JavaScript, and AWS to create a mental health web app.",
            isLeftAligned: false
        },
        {
            title: "Silverado Engineering",
            role: "Software Engineer Intern",
            date: "July 2024 - ",
            description: "Silverado Engineering is an energy power start up. Having not known much about the energy industry and anything about breakers or how feeders work, it is needless to say that I have learned a lot so far and hope to learn more.",
            isLeftAligned: true
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
