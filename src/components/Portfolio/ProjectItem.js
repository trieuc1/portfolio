import React from 'react';
import black_github from '../../assets/black_github.png'; // Assuming all projects use the same GitHub icon
import portfolio_star from '../../assets/portfolio_star.png';

const ProjectItem = ({
  projectName,
  frameworks,
  description,
  projectIcon,
  githubLink,
  isOpen,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <div className="project">
      <img src={portfolio_star} alt="project icon" className="project-star" />
      <div className="project-content" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className="project-closed" style={{ display: isOpen ? 'none' : 'flex' }}>
          <img src={projectIcon} alt="project icon" className="project-icon" style={{ display: isOpen ? 'none' : 'flex' }} />
        </div>
        <div className="project-text" style={{ display: isOpen ? 'flex' : 'none' }}>
          <p className="project-name">{projectName}</p>
          <p className="project-frameworks">{frameworks}</p>
          <p className="project-description">{description}</p>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={black_github} alt="GitHub icon" className="github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
