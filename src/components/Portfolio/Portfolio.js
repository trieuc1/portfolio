import React, { useState } from 'react';
import ProjectItem from './ProjectItem';
import game_icon from '../../assets/game_icon.png';
import movie_icon from '../../assets/movie_icon.png';
import search_icon from '../../assets/search_icon.png';
import music_icon from '../../assets/music_icon.png';
import travel_icon from '../../assets/travel_icon.png';
import portfolio_icon from '../../assets/portfolio_icon.png';
import outfit_icon from '../../assets/outfit_icon.png';
import black_github from '../../assets/black_github.png';
import black_figma from '../../assets/black_figma.png';

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
      link: 'https://github.com/trieuc1/CS171_Minesweeper',
      linkIcon: black_github
    },
    {
      name: 'FILM INSIGHTS',
      frameworks: 'HTML, CSS, JS, Python (scikit-learn)',
      description: `Explored text classification using the IMDb dataset, focusing on sentiment analysis of movie reviews. Neural networks achieved an overall accuracy of 84%.`,
      icon: movie_icon,
      link: 'https://github.com/deano4/cs178_final',
      linkIcon: black_github
    },
    {
      name: 'SEARCH ENGINE',
      frameworks: 'HTML, CSS, JS, Python (bs4, lxml, nltk)',
      description: `Developed a search engine using web scraping and advanced ranking techniques to deliver highly relevant search results in under 0.5 seconds.`,
      icon: search_icon,
      link: 'https://github.com/trieuc1/CS121_Project3',
      linkIcon: black_github
    },
    {
      name: 'PORTFOLIO WEBSITE',
      frameworks: 'HTML, CSS, React, JSX',
      description: `Created a portfolio website`,
      icon: portfolio_icon,
      link: 'https://github.com/trieuc1/celine-portfolio',
      linkIcon: black_github
    },
    {
      name: 'LOOK',
      frameworks: 'HTML, CSS, JS',
      description: `Created a fashion-oriented web platform with interactive content for users that are interested in finding new ways to express themselves through style. Coming soon.`,
      icon: outfit_icon,
      link: 'https://www.figma.com/design/qveBSRADtEkraEzTTma292/portfolio-website?node-id=19-244&t=bkyLgCO9AaQanZkb-1',
      linkIcon: black_figma
    },
    // {
    //   name: 'GAME PROJECT',
    //   frameworks: 'HTML, CSS, JS',
    //   description: `A dynamic game created with HTML, CSS, and JS. Leveraged front-end technologies to deliver a seamless gaming experience. Coming Soon.`,
    //   icon: music_icon,
    //   link: '',
    //   linkIcon: black_github
    // },
    {
      name: 'TRAVEL PROJECT',
      frameworks: 'HTML, CSS, JS',
      description: `Developed a AI travel planner. Coming Soon.`,
      icon: travel_icon,
      link: '',
      linkIcon: black_github
    }
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
          link={project.link}
          linkIcon={project.linkIcon}
          isOpen={projects[index]}
          onMouseEnter={handleMouseEnterProject(index)}
          onMouseLeave={handleMouseLeaveProject(index)}
        />
      ))}
    </div>
  );
};

export default Portfolio;
