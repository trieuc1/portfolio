import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import game_icon from '../../assets/game_icon.png';
import movie_icon from '../../assets/movie_icon.png';
import search_icon from '../../assets/search_icon.png';
import music_icon from '../../assets/music_icon.png';
import travel_icon from '../../assets/travel_icon.png';
import outfit_icon from '../../assets/outfit_icon.png';

const Portfolio = () => {
  const [projects, setProjects] = useState([false, false, false, false, false, false]);

  const handleMouseEnterProject = (index) => () => {
    const newProjects = [...projects];
    newProjects[index] = true;
    setProjects(newProjects);
  };

  const handleMouseLeaveProject = (index) => () => {
    const newProjects = [...projects];
    newProjects[index] = false;
    setProjects(newProjects);
  };

  const projectData = [
    {
      name: 'AI MINESWEEPER',
      frameworks: 'Python',
      description: `I engineered an AI-powered Minesweeper solver that achieved an overall solvability rate of 70%. This solver harnessed techniques such as backtracking algorithms, probability analysis, and constraint satisfaction.`,
      icon: game_icon,
      githubLink: 'https://github.com/your-ai-minesweeper-repo',
    },
    {
      name: 'FILM INSIGHTS',
      frameworks: 'HTML, CSS, JS, Python (scikit-learn)',
      description: `Explored text classification using the IMDb dataset, focusing on sentiment analysis of movie reviews. Neural networks achieved an overall accuracy of 84%.`,
      icon: movie_icon,
      githubLink: 'https://github.com/your-film-insights-repo',
    },
    {
      name: 'SEARCH ENGINE',
      frameworks: 'HTML, CSS, JS, Python (bs4, lxml, nltk)',
      description: `Developed a search engine using web scraping and advanced ranking techniques to deliver highly relevant search results in under 0.5 seconds.`,
      icon: search_icon,
      githubLink: 'https://github.com/your-search-engine-repo',
    },
    {
      name: 'GAME PROJECT',
      frameworks: 'HTML, CSS, JS',
      description: `A dynamic game created with HTML, CSS, and JS. Leveraged front-end technologies to deliver a seamless gaming experience.`,
      icon: music_icon,
      githubLink: 'https://github.com/your-game-project-repo',
    },
    {
      name: 'TRAVEL PROJECT',
      frameworks: 'HTML, CSS, JS',
      description: `Developed a travel blog showcasing different destinations using modern web development practices.`,
      icon: travel_icon,
      githubLink: 'https://github.com/your-travel-project-repo',
    },
    {
      name: 'FASHION PROJECT',
      frameworks: 'HTML, CSS, JS',
      description: `Created a fashion-oriented web platform with interactive content for users.`,
      icon: outfit_icon,
      githubLink: 'https://github.com/your-fashion-project-repo',
    },
  ];

  return (
    <div id="portfolio" className="portfolio-page">
      {projectData.map((project, index) => (
        <ProjectItem
          key={index}
          projectName={project.name}
          frameworks={project.frameworks}
          description={project.description}
          projectIcon={project.icon}
          githubLink={project.githubLink}
          isOpen={projects[index]}
          onMouseEnter={handleMouseEnterProject(index)}
          onMouseLeave={handleMouseLeaveProject(index)}
        />
      ))}
    </div>
  );
};

export default Portfolio;
