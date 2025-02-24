import React from 'react';
import portfolio_star from '../../assets/portfolio_star.png';

const ProjectItem = ({
  projectName,
  frameworks,
  description,
  projectIcon,
  link,
  linkIcon,
  isOpen,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div className="project">
      <img src={portfolio_star} alt="star icon" className="project-star" />
      <div className="project-content" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="project-closed" style={{ display: isOpen ? 'none' : 'flex' }}>
          <img src={projectIcon} alt="project icon" className="project-icon" style={{ display: isOpen ? 'none' : 'flex' }} />
        </div>
        <div className="project-text" style={{ display: isOpen ? 'flex' : 'none' }}>
          <p className="project-name">{projectName}</p>
          <p className="project-frameworks">{frameworks}</p>
          <p className="project-description">{description}</p>
          {/* <a href={link} target="_blank" rel="noopener noreferrer">
            <img src={linkIcon} alt="GitHub icon" className="github-icon" />
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
