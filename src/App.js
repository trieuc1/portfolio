import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/navbar';
import user_image from './assets/home_image.png';
import about_image from './assets/about_me.png';
import journey_star from './assets/journey_star.png';
import portfolio_star from './assets/portfolio_star.png';
import game_icon from './assets/game_icon.png';
import travel_icon from './assets/travel_icon.png';
import music_icon from './assets/music_icon.png';
import movie_icon from './assets/movie_icon.png';
import search_icon from './assets/search_icon.png';
import outfit_icon from './assets/outfit_icon.png';
import black_link from './assets/black_link.png';
import black_github from './assets/black_github.png';
import email_icon from './assets/email_icon.png';
import resume_icon from './assets/resume_icon.png';
import white_github from './assets/white_github.png';
import linkedin_icon from './assets/linkedin_icon.png';

function App() {
	const [journeys, setJourneys] = useState([false, false, false, false]);

	const [projects, setProjects] = useState([false, false, false, false, false, false]);

	// Function to toggle project state based on index

	const [backgroundSize, setBackgroundSize] = useState('contain');
		// const [isTransitioned, setIsTransitioned] = useState(false);


	useEffect(() => {
		const handleResize = () => {
		if (window.innerWidth <= 768) { // Adjusted for 48rem
			setBackgroundSize('auto');
		} else {
			setBackgroundSize('contain');
		}
		};

		// Initial check on mount
		handleResize();

		// Event listener for window resize
		window.addEventListener('resize', handleResize);


		// Clean up the event listener
		return () => {
		window.removeEventListener('resize', handleResize);
		};
	}, []);


	useEffect(() => {
		const sections = document.querySelectorAll('.transition-section');

		const observerOptions = {
			threshold: 0.2
		};

		// Intersection Observer callback
		const observerCallback = (entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active');
				} else {
					entry.target.classList.remove('active');
				}
			});
		};

		// Create the observer instance
		const observer = new IntersectionObserver(observerCallback, observerOptions);

		// Observe each section
		sections.forEach(section => {
			observer.observe(section);
		});

		// Cleanup observer on unmount
		return () => {
			sections.forEach(section => {
				observer.unobserve(section);
			});
		};
	}, []);

	const home_image = {
		backgroundImage: `url(${user_image})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: backgroundSize,
		backgroundPosition: 'right bottom',
		height: '100%', 
		width: '100%',
	};

	//   about me page
	const [skills, setSkills] = useState('user-section on');
	const [extracurriculars, setExtracurriculars] = useState('user-section off');
	const [education, setEducation] = useState('user-section off');

	const handleSkills = () =>{
		setSkills('user-section on');
		setExtracurriculars('user-section off');
		setEducation('user-section off');
	};

	const handleExtracurriculars = () =>{
		setSkills('user-section off');
		setExtracurriculars('user-section on');
		setEducation('user-section off');

	};

	const handleEducation = () =>{
		setSkills('user-section off');
		setEducation('user-section on');
		setExtracurriculars('user-section off');
	};


	// Function to toggle journey state based on index
	const handleJourney = (index) => () => {
	  const newJourneys = [...journeys];
	  newJourneys[index] = !newJourneys[index];
	  setJourneys(newJourneys);
	};

	const handleMouseEnterJourney = (index) => () => {
		const newJourneys = [...journeys];
		newJourneys[index] = true;
		setJourneys(newJourneys);
	};


	const handleMouseLeaveJourney = (index) => () => {
		const newJourneys = [...journeys];
		newJourneys[index] = false;
		setJourneys(newJourneys);
	};


	const handleProject = (index) => () => {
		const newProjects = [...projects];
		newProjects[index] = !newProjects[index];
		setProjects(newProjects);
	};

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


	const [formData, setFormData] = useState({
		email: '',
		message: ''
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value
		}));
	};

	
	const scriptURL = 'https://script.google.com/macros/s/AKfycbwvl_x57Jny6iYj6kx2hZyvTp5B9pGSDrMMfg2N1EG9anlEAeHcCM9Cz-loZ2mmTaJlAw/exec';


	const handleSubmit = async (e) => {
		try{
			e.preventDefault();
			await fetch(scriptURL, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});
		} catch (error) {
			console.log('Error submitting form:', error);
		}
		setFormData({
			email: '',
			message: ''
		});

	};


  return (
    <div className="App">
      <Navbar/>
      <div id="home" className='home-page' style={home_image}>
        {/* <img src={user_image} alt="user" className='user-image'></img> */}
        <div className='home-text'>
          <p className='home-text-white'>hi! my name is celine trieu.</p>
          <div className='typewriter'>
            <p className='home-text-tan'>i'm a software engineer</p>
          </div>
        </div>
      </div>
      <div id='about-me' className='transition-section'>
		<div className='about-me-page'>
			<p className='user-header media'>init(self)</p>
			<div className='left-container'>
				<div className='user-image'>
					<img src={about_image} alt="user" className='about-image'></img>
				</div>
				<div className="user-socials" id="laptop-social">
					<iframe title="Spotify Playlist" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/0wwq6fvlucZxNt1J0VNOUC?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
				</div>
			</div>
			<div className='user-content'>
					<p id="user-header" className='user-header'>init(self)</p>
					<p className='user-description'>
					<span className='user-name'>CELINE TRIEU</span> is currently a computer science student at uci. she is originally from san diego, ca and has been there the majority of her life. she comes from a big viet-chinese family and has three other siblings with whom she is very close to. she loves watching crime and drama tv shows like criminal minds, bones, and grey's anatomy. she also enjoys watching kdramas like fight for my way, reply 1988, and our beloved summer. as for hobbies, she likes to play lacrosse, thrift clothes, and read.
					</p>
					<div className='user-table'>
						<div className='sections'>
							<p className={skills === "user-section on" ? 'section-name selected-section' : 'section-name'} onClick={handleSkills}>skills</p>
							<p className={extracurriculars === "user-section on" ? 'section-name selected-section' : 'section-name'} onClick={handleExtracurriculars}>extracurriculars</p>
							<p className={education === "user-section on" ? 'section-name selected-section' : 'section-name'} onClick={handleEducation}>education</p>
						</div>
						{/* skills */}
						<div id="skills" className={skills}>
							<div className='user-text'>
								<p className='user-title'>c/c++</p>
								<p className='user-blurb'>
									programming in c/c++ as a second language, data structure implementation and analysis, principles in system design
								</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>python</p>
								<p className='user-blurb'>applied django framework to integrate OOTify web application. machine learning and data mining (scikit-learn), introduction to programming, programming with software libraries, intermediate programming, information retrieval, introduction to atrificial intelligence</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>java</p>
								<p className='user-blurb'>programming in java as a second language</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>javascript</p>
								<p className='user-blurb'>dynamically created web pages based off of users' information and retrieval from MongoDB database in conjoinment with html/css</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>html/css</p>
								<p className='user-blurb'>utilized to create responsive web pages based off of figma designs during time at OOTify. developed over half of OOTify's designs into their web appplication (ex. mood insights page, user sessions page, resource library, ...)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>sql/mongoDB</p>
								<p className='user-blurb'>leveraged sql in courses such as introduction to data management and intermediate programmming. practiced MongoDB as main database structure for OOTify as well as in VenusHacks project</p>
							</div>
						</div>
						{/* extracurriculars */}
						<div id="extracurriculars" className={extracurriculars}>
							<div className='user-text'>
								<p className='user-title'>women in information and computer science - secretary</p>
								<p className='user-blurb'>secretary (2024-present), member of internal affairs committee (2023-2024), engaged in mentorship as a mentor and as a mentee (2022-present)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>pinterest engage program - engage scholar</p>
								<p className='user-blurb'>was one of 21 scholars selected from Pinterest's nationwide program, which aims to support underrepresented groups in SWE to gain the necessary resources to attain an internship (2023-2024)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>uci women's lacrosse club - midfield</p>
								<p className='user-blurb'>was awarded best midfield player by head coach due to dominant play on both ends of the field (2023-2024)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>national honors society - secretary</p>
								<p className='user-blurb'>maintained effective communication with the faculty council to ensure smooth club operations. proficiently documented meeting minutes to accurately capture discussions and decisions (2021-2022)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>key club - secretary</p>
								<p className='user-blurb'>served local community by organizing and participating in events to give back as secretary of the club. received club of the year for district 21 key club (2020-2022)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>varisty girls' lacrosse - captain</p>
								<p className='user-blurb'>led team to CIF San Diego Section playoffs in 2018, 2019, and 2021. provided consistent support and encouragement to teammates, promoting a positive team atmosphere. recognized as first team all league (1 of 11) player in san diego city section (2018-2022)</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>varisty girls' field hockey - captain</p>
								<p className='user-blurb'>led team to CIF san diego section playoffs in 2019, 2021, 2022. achieved recognition as one of the top scorers in the city league and was selected to be a part of the first team all league (1 of 11), excelling in both the attack and midfield positions (2018-2022)</p>
							</div>

						</div>
						{/* education */}
						<div id="education" className={education}>
							<div className='user-text'>
								<p className='user-title'>university of california, irvine - dec 2025</p>
								<p className='user-blurb'>granted regents scholarship, dean's honor roll (2022-present), predicted graduation date: december 2025, gpa: 3.857</p>
							</div>
							<div className='user-text'>
								<p className='user-title'>mira mesa high school - jun 2022</p>
								<p className='user-blurb'>top 3% of school (out of 500+), female scholar athlete of the year (1 of 1), social science department award (1 of 2), top scholar award (2018-2022), gpa: 4.58</p>
							</div>
						</div>
					</div>

			</div>
		</div>
		<div id="phone-social" className="user-socials">
				<iframe title="Spotify Playlist" style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/0wwq6fvlucZxNt1J0VNOUC?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
		</div>
	</div>
	<div id="journey" className='journey-page transition-section'>
        <div className='line'></div>
        <div className='journey-containers'>
          <div className='journey' onClick={handleJourney(0)} onMouseEnter={handleMouseEnterJourney(0)} onMouseLeave={handleMouseLeaveJourney(0)}>
            <div className="timeline">
              <div className="dot"></div>
              <p className='timeline-date left'>Nov 2021 - Jun 2023</p>
            </div>
            <img src={journey_star} alt="journey star" className='journey-star'></img>
            <p className='journey-text'>
              Assistant Shift Lead<br/>Little Caesars
            </p>
            <div className='journey-hover' style={{ display: journeys[0] ? 'flex' : 'none' }}>
              <p className='journey-hover-header'>LITTLE CAESARS</p>
              <p className='journey-hover-text'>
                one of my first jobs was working at little caesars as an assistant shift lead. it was through this experience that i was able to learn how important it is to have a good, operating crew as well as the importance of proper communication to carry out a goal.
              </p>
            </div>
          </div>
          <div className='journey' onClick={handleJourney(1)} onMouseEnter={handleMouseEnterJourney(1)} onMouseLeave={handleMouseLeaveJourney(1)}>
            <div className="timeline">
              <div className="dot"></div>
              <p className='timeline-date'>Sept 2022 - Present</p>
            </div>
            <img src={journey_star} alt="journey star" className='journey-star'></img>
            <p className='journey-text'>
              Secretary<br/>WICS
            </p>
            <div className='journey-hover' style={{ display: journeys[1] ? 'flex' : 'none' }}>
              <p className='journey-hover-header'>WICS</p>
              <p className='journey-hover-text'>
                wics (women in information and computer science) is a club that has profoundly influenced my experience in college to be one that is filled with friends. the community there had inspired me to join mentorship, committee, and now, be on its board as secretary.
              </p>
            </div>
          </div>
		  <div className='journey' onClick={handleJourney(2)} onMouseEnter={handleMouseEnterJourney(2)} onMouseLeave={handleMouseLeaveJourney(2)}>
            <div className="timeline">
              <div className="dot"></div>
              <p className='timeline-date left'>Aug 2023 - Present</p>
            </div>
            <img src={journey_star} alt="journey star" className='journey-star'></img>
            <p className='journey-text'>
              Engage Scholar<br/>Pinterest
            </p>
            <div className='journey-hover' style={{ display: journeys[2] ? 'flex' : 'none' }}>
              <p className='journey-hover-header'>Pinterest</p>
              <p className='journey-hover-text'>
                the engage program at pinterest has helped guide me through the process of preparing for internship interviews by offering insight into what recruiters look for in a candidate. this program has not only helped me feel more comfortable talking to professionals in the field but it has also taught me the importance of using the resources given to you.
              </p>
            </div>
          </div>
          <div className='journey' onClick={handleJourney(3)} onMouseEnter={handleMouseEnterJourney(3)} onMouseLeave={handleMouseLeaveJourney(3)}>
            <div className="timeline">
              <div className="dot"></div>
              <p className='timeline-date'>Feb 2024 - Present</p>
            </div>
            <img src={journey_star} alt="journey star" className='journey-star'></img>
            <p className='journey-text'>
              Development Co-Lead<br/>OOTify
            </p>
            <div className='journey-hover' style={{ display: journeys[3] ? 'flex' : 'none' }}>
              <p className='journey-hover-header'>OOTify</p>
              <p className='journey-hover-text'>
                OOTify is a mental health startup that aims to provide its users the necessary resources to aid their mental health journey. this internship has taught me so much of what i know as a programmer and has provided me invaluable experience of leading a team to fulfill development goals
              </p>
            </div>
          </div>

        </div>

      </div>
      <div id="portfolio" className='portfolio-page transition-section'>
		{/* minesweeper project */}
        <div className='project' onClick={handleProject(0)} onMouseEnter={handleMouseEnterProject(0)} onMouseLeave={handleMouseLeaveProject(0)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[0] ? 'none' : 'flex' }}>
              <img src={game_icon} alt="game icon" className='project-icon' style={{ display: projects[0] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[0] ? 'flex' : 'none' }}>
				<p className='project-name'>AI MINESWEEPER</p>
				<p className='project-frameworks'>python</p>
				<p className='project-description'>
					i engineered an ai-powered minesweeper solver that achieved an overall solvability rate of 70%. this solver harnessed advanced techniques such as backtracking algorithms, probability analysis, and constraint satisfaction to automatically tackle the minesweeper game across a range of board sizes from 5x5 to 16x30. through this project, i was able to utilize artificial intelligence effectively in solving complex, logic-based puzzles, showcasing both technical proficiency and problem-solving capabilities.
				</p>
              	<img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>
		{/* ml movie project */}
		<div className='project' onClick={handleProject(1)} onMouseEnter={handleMouseEnterProject(1)} onMouseLeave={handleMouseLeaveProject(1)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[1] ? 'none' : 'flex' }}>
              <img src={movie_icon} alt="movie icon" className='project-icon' style={{ display: projects[1] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[1] ? 'flex' : 'none' }}>
              <p className='project-name'>FILM INSIGHTS</p>
              <p className='project-frameworks'>html, css, js, python (scikit-learn)</p>
              <p className='project-description'>
			  	in collaboration with two others, i explored text classification using the imdb dataset, focusing on positivity analysis of movie reviews. our project trained and tested various classifiers including feedforward neural networks, k-nearest neighbor (knn), logistic regression, and lstm models. through rigorous evaluation and comparison, we determined that neural networks had a better overall result with 84% accuracy and 3.5s prediction time on 10,000 samples.
			  </p>
              <img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>
		{/* search engine project */}
        <div className='project' onClick={handleProject(2)} onMouseEnter={handleMouseEnterProject(2)} onMouseLeave={handleMouseLeaveProject(2)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[2] ? 'none' : 'flex' }}>
              <img src={search_icon} alt="search icon" className='project-icon' style={{ display: projects[2] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[2] ? 'flex' : 'none' }}>
              <p className='project-name'>SEARCH ENGINE</p>
              <p className='project-frameworks'>html, css, js, python (bs4, lxml, nltk)</p>
              <p className='project-description'>
			  	in a team of three, i helped lead the effort to web scrape and lemmatize over 1000 webpages. we used this data to develop an efficient n-gram search engine, leveraging an inverted index enhanced with page rank, cosine similarity, metadata, and tf-idf scoring. our system delivers highly relevant search results in under 0.5 seconds.
			  </p>
              <img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>
		{/* music project */}
        <div className='project' onClick={handleProject(3)} onMouseEnter={handleMouseEnterProject(3)} onMouseLeave={handleMouseLeaveProject(3)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[3] ? 'none' : 'flex' }}>
              <img src={music_icon} alt="music icon" className='project-icon' style={{ display: projects[3] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[3] ? 'flex' : 'none' }}>
              <p className='project-name'>GAME PROJECT</p>
              <p className='project-frameworks'>html, css, js</p>
              <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut in voluptate velit esse cillum dolollit anim id est laborum.</p>
              <img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>
		{/* travel project */}
		<div className='project' onClick={handleProject(4)} onMouseEnter={handleMouseEnterProject(4)} onMouseLeave={handleMouseLeaveProject(4)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[4] ? 'none' : 'flex' }}>
              <img src={travel_icon} alt="travel icon" className='project-icon' style={{ display: projects[4] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[4] ? 'flex' : 'none' }}>
              <p className='project-name'>GAME PROJECT</p>
              <p className='project-frameworks'>html, css, js</p>
              <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut in voluptate velit esse cillum dolollit anim id est laborum.</p>
              <img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>
		{/* fashion project */}
		<div className='project' onClick={handleProject(5)} onMouseEnter={handleMouseEnterProject(5)} onMouseLeave={handleMouseLeaveProject(5)}>
          <img src={portfolio_star} alt="project star" className='project-star'></img>
          <div className='project-content'>
            <div className='project-closed' style={{ display: projects[5] ? 'none' : 'flex' }}>
              <img src={outfit_icon} alt="outift icon" className='project-icon' style={{ display: projects[5] ? 'none' : 'flex' }}></img>
            </div>
            <div className='project-text' style={{ display: projects[5] ? 'flex' : 'none' }}>
              <p className='project-name'>GAME PROJECT</p>
              <p className='project-frameworks'>html, css, js</p>
              <p className='project-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aut in voluptate velit esse cillum dolollit anim id est laborum.</p>
              <img src={black_github} alt="github icon" className='github-icon'></img>
            </div>
          </div>
        </div>


      </div>
	<div id="footer" className='footer'>
		<p className='social-header'>CONTACT ME</p>
		<div className='contact-me-container'>
			<form className='contact-me' onSubmit={handleSubmit}>
				<input onChange={handleFormChange} type='email' name='email' value={formData.email} className="contact-email" placeholder="Email" required></input>
				<textarea onChange={handleFormChange} type='text' name='message' value={formData.message} className="contact-message" placeholder="Message" required></textarea>
				<button type='submit' className='contact-button'>SUBMIT</button>
			</form>
			<div className='socials'>
				{/* email */}
				<div className='social'>
					<img className='social-icon' alt='email' src={email_icon} onClick={() => {
						window.open('mailto:ctrieu87@gmail.com');
						}}>
					</img>
					<p className='social-text'>EMAIL</p>
				</div>
				{/* resume */}
				<div className='social'>
					<img id="resume-icon" className='social-icon' alt='resume' src={resume_icon} onClick={() => {
						window.open('https://docs.google.com/document/d/1898lGThmXjjsmz3QDc7HeTxRveVbT2NPvK0A5aA18kE/edit?usp=sharing');
						}}>
					</img>
					<p className='social-text'>RESUME</p>
				</div>
				{/* github */}
				<div className='social'>
					<img className='social-icon' alt='github' src={white_github} onClick={() => {
						window.open('https://github.com/trieuc1');}}></img>
					<p className='social-text'>GITHUB</p>
				</div>
				{/* linkedin */}
				<div className='social'>
					<img className='social-icon' alt='linkedin' src={linkedin_icon} onClick={() => {
						window.open('https://www.linkedin.com/in/-celine-trieu/');}}></img>
					<p className='social-text'>LINKEDIN</p>
				</div>

			</div>

		</div>
		<p className='copyright-text'>©2024 by Celine Trieu | Made with React, HTML, CSS</p>
	</div>



    </div>
  );
}

export default App;
