import './App.css';
import chirp from './/chirp.png';
import chess from './/chess.png'
import chessDemo from './Chess Game Demo.mov';
import studybuddy from './/studybuddy.png';
import linkedin from './linkedin.png';
import github from './/github.webp';
import React, { useEffect} from 'react';
import resume from './resume.pdf';
import poster from './poster.pdf';
import posterImg from './/posterImage.jpg'
import foodfinderVideo from './/foodfinderDemo.mov';
import foodfinder from './/foodfinder.PNG';
import headshot from './/professional-headshot.jpg';
import research from './CNN_Phishing_Detection.pdf'
import researchReport from './CNN vs RNN for Phishing Detection.pdf';
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

    // Scroll to projects section on click
    const handleContactClick = async () => {
        const elmntToView = document.getElementById("thankYou")
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
                                <div>Resume</div>
                            </a>
                            <div class="redirects" onClick={handleProjectsClick}>Projects</div>
                            <div class="redirects" onClick={handleContactClick}>Contact</div>
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
                        <img src={headshot} alt="me" height={400} width={270}/>
                        <div class="preface">
                        I'm an aspiring software engineer. 
                        </div>
                        <div class="preface" style={{borderBottom: '2px solid #BFA181', paddingBottom: '20px'}}>
                            Before I show you some of my work, here are some insights about my connection with computer science.
                        </div>
                        <div class="paragraph" style={{paddingTop: '75px'}}>
                            Computer science, to me, is not just a field of study but an outlet for creativity.
                            I have always loved tinkering with the technology around me and figuring out how things work.
                            Computer science gives me the opportunity to solve intricate problems in creative ways. It 
                            offers the unique potential to transform the world, and my primary motivation lies in
                            developing impactful solutions that address real-world challenges. Whether for healthcare, 
                            environmental sustainability, or education, each line of code is a step towards a better future.
                        </div>
                        <div class="paragraph">
                            My main career goal is to align with an organization that shares my perspective on the transformative 
                            power of computer science.  I am deeply passionate about creating dependable software that is accessible
                            to everyone and am particularly driven to harness AI and machine learning to foster positive change. The 
                            potential of AI to revolutionize mental healthcare and offer life-changing support to those affected by 
                            mental illness truly resonates with me. I would love to contribute and grow in an environment that is actively
                            shaping solutions that heal and empower others.
                        </div>
                        <span class="conclusion">
                            If you've taken the time to read through everything, feel free to explore some of my projects below!
                        </span>
                        <div style={{height: '10px'}}/>
                    </div>       
                    <div class="body" id="projects">
                        <div class="section">
                            <div class="introduction">
                                Here are some of the projects I've worked on.
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
                                    <video poster={foodfinder} playsInline controls loop muted width="250">
                                        <source src={foodfinderVideo} />
                                        Your browser does not support the video tag.
                                    </video>
                                    <p style={{ marginBottom: '50px'}}>
                                    This is my most exciting project yet! I've always wanted a MyFitnessPal type app, but with a smoother, more modern UI.
                                    Hence, why I started making FoodFinder. It's still a work in progress, but I'm very enthusiastic about adding more features. 
                                    I eventually want to post this to the App Store and Google Play Store. The coolest feature in my opinion is the ability to
                                    upload images of foods and receive estimations of how many calories are in them. Perfect for people who aren't very well-versed
                                    in nutrition! For the time being, I don't have this deployed anywhere, but I included a demo video above. It showcases how 
                                    users can log food by taking pictures, how users can log food manually, and a few other things like editing and deleting foods in the log, 
                                    and the acount page.
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href="https://eorev.github.io/Chirp/" style={{textDecoration: 'none'}}>
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
                                    category for our design and efforts, out of over 150 competitors! I'm very proud of the outcome of our hard work, but regardless 
                                    of how we did I'm glad I had such a great learning experience for my first hackathon!
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href={poster} style={{textDecoration: 'none'}}>
                                        <div class="name">Phishing Detector CNN Model</div>
                                    </a>
                                    <h3>Tech: Python, Keras/Tensorflow</h3>
                                    <a href={poster}>
                                        <img src={posterImg} alt="neural network research" height="400" width="300"/>
                                    </a>
                                    <p style={{ marginBottom: '50px'}}>
                                        This is some research my peer and I conducted. We compared convolutional neural networks (CNN) to recurrent
                                        neural networks (RNN) in their effectiveness classifying URLs as phishing or non-phishing. We trained each
                                        model on a dataset of over 800,000 URLs, and eventually concluded that CNNs are more effective when 
                                        processing time is taken into account. It proved to be a great learning experience, and it also sparked my interest
                                        in AI/ML! If you want to check out my portion of the work (the CNN model), you can
                                        <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                                            <a href={research} class='redirects'>
                                            view my Colab notebook here.
                                            </a>
                                        </span>
                                         If you're interested in a more in-depth analysis,
                                        <span style={{textDecoration: 'underline', cursor: 'pointer'}}>
                                            <a href={researchReport} class='redirects'>
                                                here is the full research report
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="section">
                                <div class="links">
                                    <a href="https://studbuddy.netlify.app/" style={{textDecoration: 'none'}}>
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
                                    They can also share these files with people they add as friends, via user ID.
                                    It's really neat to look back on this and see how far I've come!
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
                                    <video poster={chess} playsInline controls loop muted width="250">
                                        <source src={chessDemo}/>
                                        Your browser does not support the video tag.
                                    </video>
                                    <p style={{ marginBottom: '50px'}}>
                                    I wanted to practice my Object Oriented Programming skills and figured Chess was a great
                                    starting point, especially since I'm quite passionate about it! In this program, I implemented 
                                    the classic rules of chess. If you want to see how it works, I included a short demo video of some gameplay
                                    with the GUI that I made.
                                    </p>                                    
                                </div>
                            </div>
                        </div>
                        <div class="section">
                            <div class="name" style={{paddingTop: '75px'}}>
                                Now, here are some extras about me!
                            </div>
                            <div class="paragraph">
                            I love coffee and trying out new coffee shops whenever I go somewhere new. 
                            It's also my favorite pre-workout for lifting or running!
                            </div>
                            <div class="paragraph">
                                Before I started my career in computer science, I was hoping for a career in baseball. 
                                Its been a passion of mine for over 10 years, and its nice to watch a game here and there
                                to relax. My favorite team is the New York Mets!
                            </div>
                            <div class="paragraph" style={{paddingBottom:'75px', borderBottom: '2px solid #BFA181'}}>
                            I also love playing chess and poker. Nothing beats a cool checkmate or bluffing my way to a win with 7-2 offsuit!
                            </div>
                        </div>
                        <div class="section">
                            <div class="thankYou">
                                <div>Thank you for taking the time to read all of this!</div>
                                <div class="name" style={{marginTop: '10px'}}>I'd love to get to know more about you.</div>
                            </div>
                            <div class="thankYou" id="thankYou">
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