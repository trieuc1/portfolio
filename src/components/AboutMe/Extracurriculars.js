import React from 'react';

const Extracurriculars = () => {
    // Define the text content as variables
    const extracurricularsData = [
        {
            title: 'Women in Information and Computer Science (WICS) - Secretary',
            blurb: 'Secretary (2024-present), member of Internal Affairs Committee (2023-2024), engaged in mentorship as a mentor and mentee.'
        },
        {
            title: 'Pinterest Engage Program - Scholar',
            blurb: 'Selected as one of 21 scholars from Pinterest\'s nationwide program, supporting underrepresented groups in software engineering.'
        },
        {
            title: 'UCI Women’s Lacrosse Club - Midfielder',
            blurb: 'Awarded best midfielder by head coach for dominant play on both ends of the field (2023-2024).'
        },
        {
            title: 'National Honors Society - Secretary',
            blurb: 'Maintained communication with faculty and documented meeting minutes for efficient club operations (2021-2022).'
        },
        {
            title: 'Key Club - Secretary',
            blurb: 'Served local community by organizing and participating in community events to give back; received Club of the Year for District 21'
        },
        {
            title: 'Varsity Girls Lacrosse - Captain',
            blurb: 'Achieved recognition as one of the top scorers in the city league, excelling in both the attack and midfield positions; led team to CIF San Diego Section playoffs in 2019, 2021, 2022; 2x First Team All League'
        },
        {
            title: 'Varsity Girls Field Hockey - Captain',
            blurb: 'Led team to CIF San Diego Section playoffs in 2018, 2019, and 2021 by utilizing effective communication between coach and teammates; selected as First Team All League'
        }
    ];

    return (
        <div id="extracurriculars" className="user-section on">
            {extracurricularsData.map((activity, index) => (
                <div key={index} className="user-text">
                    <p className="user-title">{activity.title}</p>
                    <p className="user-blurb">{activity.blurb}</p>
                </div>
            ))}
        </div>
    );
};

export default Extracurriculars;
