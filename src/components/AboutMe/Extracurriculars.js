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
