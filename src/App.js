import './App.css';
import chirp from './/chirp.png';
import chess from './/chess.png';
import studybuddy from './/studybuddy.png';
import linkedin from './linkedin.png';
import github from './/github.webp';
import React, { useEffect} from 'react';
import resume from './resume.pdf';
import foodfinderVideo from './/foodfinderDemo.mov';
import foodfinder from './/foodfinder.PNG'
import headshot from './/professional-headshot.jpg';

function App() {

    // Have each project fade in from the bottom on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section')
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight
                const threshold = viewportHeight * 0.99
                
                if (sectionTop <= threshold) {
                    section.classList.add('visible')
                } else {
                    section.classList.remove('visible')
                }
            })
        }
        window.addEventListener('scroll', handleScroll);
    }, [])
    
    // Scroll to projects section on click
    const handleProjectsClick = async () => {
        const elmntToView = document.getElementById("projects")
        elmntToView.scrollIntoView({behavior: 'smooth'})
    }

    // Scroll back to the top on click
    const handleBackToTopClick = async () => {
        const elmntToView = document.getElementById("top")
        elmntToView.scrollIntoView({behavior: 'smooth'})
    }

    // Show/hide the navbar. Shows when at the top or bottom
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.offsetHeight;
        const threshold = 5;

        if (scrollTop <= 20 || (scrollTop + windowHeight + threshold) >= documentHeight) {
            document.getElementById("navbar").style.top = "0"; // show navbar
        } else {
            document.getElementById("navbar").style.top = "-200px"; // hide navbar
        }
    }

    return (
        <div class="beforeLoad">
            <div class="container" id="top">
                <div class="navbar" id="navbar">
                    <div class="name">Daniel DeFlores</div>
                    <div class="navbarContainer">
                            <a href={resume} class="redirects">
                                <div>My Resume</div>
                            </a>
                            <div class="redirects" onClick={handleProjectsClick}>Projects</div>
                            <a href="https://www.linkedin.com/in/danieldeflores/" style={{marginInline: '5px'}}>
                                <img src={linkedin} alt="linkedin" height="40" width="40"/>
                            </a>
                            <a href="https://github.com/ddeflores" style={{marginInline: '5px'}}>
                                <img src={github} alt="github" height="45" width="45"/>
                            </a>
                    </div>
                </div>
                <div class="bottomContainer">
                    <div class="aboutMe">
                        <div class="introduction">
                            Hey, my name is Dan.
                        </div>
                        <img src={headshot} alt="me" height={400} width={270} style={{paddingTop: '20px'}}/>
                        <div class="preface" style={{padding: '20px'}}>
                            I'm an aspiring software engineer. Before I show you some of my work, here's a little bit about me.
                        </div>
                        <div class="paragraph" style={{paddingTop: '75px', borderTop: '2px solid #BFA181'}}>
                        I love coffee and trying out new coffee shops whenever I go somewhere new. 
                        Its also my favorite pre-workout for lifting or running! If you're interested,
                        my bench PR is 265x3 and my fastest mile is 6:15! I love working to improve these numbers.
                        </div>
                        <div class="paragraph">
                            I also love watching a good baseball game when my day is over to unwind. Before I started my career in computer science, I was hoping for a career in baseball. 
                            Its been a passion of mine for over 10 years!
                            Some other interests I have are playing chess and poker. Nothing beats a cool checkmate or bluffing my way to a win with 7-2 offsuit.
                        </div>
                        <span class="conclusion">
                            So yeah, that's me. If you actually cared to read all that, check out some of my projects{' '}
                            <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={handleProjectsClick}>here</span>
                        </span>
                        <div style={{height: '10px'}}/>
                    </div>       
                    <div class="body" id="projects">
                        <div class="section">
                            <div class="introduction">
                                Here are some of the projects I've worked on.
                            </div>
                            <div class="preface">
                            (You can click on the titles and check them out!)
                            </div>
                        </div>
                        <div class="projects">
                            <div class="section">
                                <div class="links" style={{borderTop: '2px solid #BFA181'}}>
                                    <a style={{textDecoration: 'none'}} href="https://github.com/ddeflores/Food-Finder">
                                        <div class="name" style={{marginTop: '50px'}}>
                                            FoodFinder
                                        </div>
                                    </a>
                                    <h3>Tech: React Native, JavaScript, Expo, Firebase, Tensorflow.js, Python, OpenAI API</h3>
                                    <video id='videoID' poster={foodfinder} playsInline controls loop muted width="250">
                                        <source src={foodfinderVideo} />
                                        Your browser does not support the video tag.
                                    </video>
                                    <p style={{ marginBottom: '50px'}}>
                                    This is my most exciting project yet! I've always wanted a MyFitnessPal type app, but with a smoother, more modern UI.
                                    Hence why I started making FoodFinder. It's still a work in progress, but I'm super excited to keep adding more features. 
                                    I eventually want to post this to the App Store and Google Play Store. The coolest feature in my opinion is the ability to
                                    upload images of foods and receive estimations of how many calories are in them. Perfect for people who aren't very well versed
                                    in nutrition! For the time being, I don't have this deployed anywhere, but I included a demo video above. It showcases how 
                                    users can log food by taking pictures, how users can log food manually, and a few other things like editing and deleting foods 
                                    and the acount page.
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href="https://studbuddy.netlify.app/" style={{color: '#0e1b29'}}>
                                        <div class="name">StudyBuddy</div>
                                    </a>
                                    <h3>Tech: React Native, TypeScript, Expo, Firebase</h3>
                                    <a href="https://studbuddy.netlify.app/">
                                        <img src={studybuddy} alt="studybuddy" height="200" width="220"/>
                                    </a>
                                    <p style={{ marginBottom: '50px'}}>
                                    This was my first time using React Native and Expo. I thought a great way to learn the basics would be to 
                                    make a file storage/sharing app similar to Google Drive.
                                    With StudyBuddy, users can either choose any file from their system, or make a text file inside of the app.
                                    They can also share these files with people they add as friends via user ID.
                                    This is a pretty bare bones application, but it's pretty cool to look back on this and see how far I've come!
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href="https://eorev.github.io/Chirp/" style={{color: '#0e1b29'}}>
                                        <div class="name">Chirp</div>
                                    </a>
                                    <h3>Tech: React, TypeScript, Firebase</h3>
                                    <a href="https://eorev.github.io/Chirp/">
                                        <img src={chirp} alt="chirp" height="200" width="220"/>
                                    </a>
                                    <p style={{ marginBottom: '50px'}}>
                                    I worked on Chirp with a team for a 24 hour hackathon, HenHacks 2023, which was hosted by the University of Delaware.
                                    Chirp was designed for students of all ages and CS backgrounds learning sorting algorithms. Our main focus was to have 
                                    a very clean UI that would be easily accessible, even for children. My team and I achieved second place in the Educational
                                    category for our design and efforts out of over 150 competitors! I'm very proud of the outcome of our hard work, but regardless 
                                    of how we did I'm glad I had such a great learning experience for my first hackathon!
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href="https://github.com/ddeflores/ChessGame" style={{textDecoration: 'none'}}>
                                        <div class="name">
                                            Chess Game
                                        </div>
                                    </a>
                                    <h3>Tech: Java, Java Swing</h3>
                                    <img src={chess} alt="chessgame" height="200" width="200"></img>
                                    <p style={{ marginBottom: '50px'}}>
                                    I wanted to practice my Object Oriented Programming skills and figured Chess was a great
                                    starting point, especially since I'm quite passionate about it! Unfortunately I don't have
                                    this deployed anywhere except, but I included a screenshot of the GUI that I made.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="thankYou">
                                <div>Thank you for taking the time to read all of this!</div>
                                <div class="name" style={{marginTop: '10px'}}>I'd love to get to know more about you.</div>
                            </div>
                            <div class="thankYou">
                                <div>
                                        Email Me At:
                                </div>
                                <div class="paragraph" style={{marginTop: '5px'}}>
                                        deflores@udel.edu
                                </div>
                                <div class="name" style={{marginTop: '5px'}}>or</div>
                                <div style={{marginTop: '5px'}}>
                                    Connect With Me!
                                </div>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <a href="https://www.linkedin.com/in/danieldeflores/" style={{margin: '15px'}}>
                                        <img src={linkedin} alt="linkedin" height="40" width="40"/>
                                    </a>
                                    <a href="https://github.com/ddeflores" style={{margin: '15px'}}>
                                        <img src={github} alt="github" height="45" width="45"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom" onClick={handleBackToTopClick}>
                    Back To Top
                </div>
            </div>
        </div>
    )
}

export default App