import React from 'react';

const Skills = () => {
    // Define the skills data as an array of objects
    const skillsData = [
        {
            title: 'C/C++',
            blurb: 'Programming in C/C++ as a second language, data structure implementation and analysis, principles in system design.'
        },
        {
            title: 'Python',
            blurb: 'Applied Django framework to integrate OOTify web application, machine learning and data mining, AI, and data science.'
        },
        {
            title: 'Java',
            blurb: 'Programming in Java as a second language.'
        },
        {
            title: 'JavaScript',
            blurb: 'Dynamically created web pages with user information retrieval from MongoDB database, using HTML/CSS.'
        },
        {
            title: 'HTML/CSS',
            blurb: 'Utilized to create responsive web pages based on Figma designs, contributing significantly to OOTify\'s web application.'
        },
        {
            title: 'SQL/MongoDB',
            blurb: 'Leveraged SQL in data management courses and used MongoDB as a primary database structure for projects like OOTify and VenusHacks.'
        }
    ];

    return (
        <div id="skills" className="user-section on">
            {skillsData.map((skill, index) => (
                <div key={index} className="user-text">
                    <p className="user-title">{skill.title}</p>
                    <p className="user-blurb">{skill.blurb}</p>
                </div>
            ))}
        </div>
    );
};

export default Skills;
