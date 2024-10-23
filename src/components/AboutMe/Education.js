import React from 'react';

const Education = () => {
    // Define the text content as variables
    const universityTitle = 'University of California, Irvine - Dec 2025';
    const universityBlurb = 'Regents Scholarship recipient, Dean’s Honor Roll (2022-present), Graduation Date: Dec 2025, GPA: 3.857.';
    
    const highSchoolTitle = 'Mira Mesa High School - Jun 2022';
    const highSchoolBlurb = 'Top 3% of class, Female Scholar Athlete of the Year, Top Scholar (2018-2022), Social Science Department Award, GPA: 4.58.';

    return (
        <div id="education" className="user-section on">
            <div className="user-text">
                <p className="user-title">{universityTitle}</p>
                <p className="user-blurb">{universityBlurb}</p>
            </div>
            <div className="user-text">
                <p className="user-title">{highSchoolTitle}</p>
                <p className="user-blurb">{highSchoolBlurb}</p>
            </div>
        </div>
    );
};

export default Education;
