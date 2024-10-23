import React from 'react';

const Skills = () => {
    // Define the skills data as an array of objects
    const skillsData = [
        {
            title: 'C/C++',
            blurb: 'Used in courses like Programming in C/C++ as a second language, Data Structure Implementation and Analysis, Principles in System Design.'
        },
        {
            title: 'Python',
            blurb: 'Python was the main language taught at UCI (ICS30-), applied Django framework to integrate OOTify web application, used Python libraries such as scikit learn for ML and AI.'
        },
        {
            title: 'Java',
            blurb: 'Used Java in courses like Programming in Java as a second language as well as Project in Database Management.'
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
            title: 'SQL',
            blurb: 'Applied SQL in data management courses like CS122A and CS122B, gaining hands-on experience with database design and querying; utilized MySQL at Silverado Engineering to create and query databases for project development.'
        },
        {
            title: 'MongoDB',
            blurb: 'Utilized MongoDB as the primary database at OOTify to design data models and execute queries, supporting key project development; also applied MongoDB during IrvineHacks for data management and application functionality'
        },
        {
            title: 'Django',
            blurb: 'Django was the primary web framework used during my time at OOTify, where I developed scalable web applications and integrated API endpoints to enhance user experience.'
        },
        {
            title: 'AWS',
            blurb: 'Experienced with AWS services, including managing S3 buckets for data storage, deploying and maintaining EC2 instances for scalable computing, and migrating databases to the cloud for improved accessibility and performance using RDS.'
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
