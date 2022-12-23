import './App.scss';
import editsearch from './assets/editsearch.png';
import pilotpal from './assets/pilotpal.png';
import foodfinder from './assets/foodfinder.png';
import spark from './assets/spark.png';
import resume from './assets/resume.jpg';
import resumepdf from './assets/Resume - Neil Prabhu.pdf'
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function App() {
  const [text] = useTypewriter({
    words: ["a student.", "a developer.", "Neil Prabhu."],
    loop: {},
    typeSpeed: 70,
    deleteSpeed: 70,
  });

  const neilPrabhuClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const aboutMeClick = () => {
    var aboutMe = document.getElementById("about-me");
    aboutMe.scrollIntoView({
      behavior: "smooth",
      block: "start" 
    });
  };

  const internship2022Click = () => {
    var internship2022 = document.getElementById("internship-2022");
    internship2022.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  const myProjectsClick = () => {
    var myProjects = document.getElementById("my-projects");
    myProjects.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const resumeClick = () => {
    var resume = document.getElementById("resume");
    resume.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const learnMoreClick = () => {
    var learnMore = document.getElementById("learn-more");
    learnMore.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

// Scroll functionality (navbar reduce and navbar highlights)
window.addEventListener('scroll', () => {
    var nav = document.querySelector("nav");
    nav.classList.toggle("reduced", window.scrollY > 0);
});

  return (
    <>
        <nav id="navbar">
            <a id="neilprabhu" onClick={neilPrabhuClick}>Neil Prabhu</a>
            <ul>
                <li><a id="nav-about-me" onClick={aboutMeClick}>About Me</a></li>
                <li><a id="nav-internship-2022" onClick={internship2022Click}>Internship 2022</a></li>
                <li><a id="nav-my-projects" onClick={myProjectsClick}>My Projects</a></li>
                <li><a id="nav-resume" onClick={resumeClick}>Resume</a></li>
                <li><a id="nav-learn-more" onClick={learnMoreClick}>Learn More</a></li>
            </ul>
        </nav>
        
        <div id="background-image">
            <h2>I am <span class="dynamic-text">{text}</span><Cursor cursorBlinking={false}/></h2>
        </div>

        <section id="about-me">
            <h2>About Me</h2>
            <p>My name is Neil, and I am a junior majoring in Computer Science 
                at the University of Illinois at Urbana-Champaign. Coding is my passion, 
                and I aspire to develop products/solutions that impact the future. 
                Within the realm of CS, I'm not quite sure what I want to specialize 
                in; however, I plan on taking several technical electives to discover 
                my interests. Outside the classroom, I am an aviation enthusiast and 
                love to watch airplanes defy gravity. I also earned my Private Pilot's 
                License and love flying recreationally whenever I can.</p>
        </section>

        <section id="education-and-skills">
            <div id="education">
                <h2>Education</h2>
                <div>
                    <h4>University of Illinois at Urbana-Champaign</h4>
                    <p>B.S. in Computer Science</p>
                </div>
                <div>
                    <h4>Expected Graduation</h4>
                    <p>May 2024</p>
                </div>
                <div>
                    <h4>College GPA</h4>
                    <p>3.91</p>
                </div>
                <div>
                    <h4>Dean's List</h4>
                    <p>Fall 2020, Spring 2021, Fall 2021</p>
                </div>
            </div>
            <div id="course-and-skills">
                <div>
                    <h2>Relevant Coursework</h2>
                    <p>
                        Algorithms, Computer Architecture, Data Structures, Database Systems, Discrete Structures, Internet of Things, System Programming, Web Programming
                    </p>
                </div>
                <div>
                    <h2>Skills</h2>
                    <p>
                        Java, Python, C/C++, Swift, HTML, CSS/SCSS, JavaScript, ReactJS, NodeJS, ExpressJS, SQL, MongoDB, Neo4j, Git
                    </p>
                </div>
            </div>
        </section>

        <div id="me1"></div>

        <section id="internship-2022">
            <h2>2022 Internship - United Airlines</h2>
            <div id="internship-container">
                <div id="internship-paragraph-container">
                    <p>
                        In the Summer of 2022, I interned at United Airlines, where I participated in the planning, design, and implementation 
                        of the "edit search" feature on the United mobile app for iOS. This feature enables customers to edit their flight search 
                        parameters in a modal window on the flight search results (FSR) screen. 
                    </p>
                    <p>Specifically, I worked with developers, business 
                        analysts, UX, and QA teams throughout the development process. I implemented components as per the MVC model and handled 
                        the underlying logic behind user inputs. When the development stage was complete, I performed rudimentary unit, regression, 
                        and E2E testing on several of the deliverables.
                    </p>
                </div>
                <img src={editsearch} width="283px" height="528px" id="editsearch"/>
            </div>
        </section>

        <section id="my-projects">
            <h2>My Projects</h2>
            <div id="mp-container">
                <div id="pilotpal-div">
                    <h4>Pilot Pal</h4>
                    <img src={pilotpal} width="212px" height="396px"/>
                    <p>Pilot Pal is an Android app that has several aeronautical features: search METAR/TAF 
                        by ICAO, search airport information, perform crosswind & headwind calculations, perform fuel and 
                        flight time calculations, and perform descent calculations by distance or vertical speed.
                    </p>
                </div>
                <div id="foodfinder-div">
                    <h4>Food Finder</h4>
                    <img src={foodfinder} width="440px" height="396px"/>
                    <p>A team of 3 and I created a full-stack web application called Food Finder that displays restaurants 
                        in the Chicagoland area and enables users to track past order history.
                    </p>
                </div>
                <div id="spark-div">
                    <h4>Spark</h4>
                    <img src={spark} width="212px" height="396px"/>
                    <p> A team of 4 and I created a full-stack application called Spark that matches users with compatible 
                        skill sets to interesting project ideas which other users have posted.
                    </p>
                </div>
            </div>
        </section>

        <div id="me2"></div>

        <section id="resume">
            <h2>Resume</h2>
            <a href={resumepdf} download>
                <img src={resume} width="638px" height="825px"/>
            </a>
        </section>

        <section id="learn-more">
            <h2>Learn More</h2>
            <a href="https://www.linkedin.com/in/neilprabhu784/" target="_blank">
                <img src={linkedin}/>
            </a>
            <a href="https://github.com/neil784" target="_blank">
                <img src={github}/>
            </a>
        </section>
        
        <footer id="footer">
            <span>Neil Prabhu 2022</span>
        </footer>
    </>
  );
}

export default App;
