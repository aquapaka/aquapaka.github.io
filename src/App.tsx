import React, {useState, useEffect} from 'react';

// Images
import aquapakaAvatar from './images/Aquatixel Pixel Art 800x800.png';
import meimeiAvatar from './images/My Love Pixel Art 800x800.png';
import emailIcon from './images/Email.png';
import linkedinIcon from './images/Linkedin.png';
import githubIcon from './images/Github.png';
import youtubeIcon from './images/Youtube.png';
import discordIcon from './images/Discord.png'

// Components
import LoadingScreen from "./components/LoadingScreen";
import Avatar from "./components/Avatar";
import SocialMediaLinks from "./components/SocialMediaLinks";
import InformationBox from "./components/InformationBox";

// Styles
import {GlobalStyle, Wrapper} from './styles/App.styles'

// Types
import {Link} from "./components/SocialMediaLinks";
import ProjectBox, {Project} from "./components/ProjectBox";

// Const
const links: Link[] = [
    {image: emailIcon, url: "mailto:aqua.tamlong@gmail.com", text: "aqua.tamlong@gmail.com"},
    {image: linkedinIcon, url: "https://www.linkedin.com/in/aquapaka/", text: "linkedin.com/in/aquapaka/"},
    {image: githubIcon, url: "https://github.com/aquapaka", text: "github.com/aquapaka"},
    {image: youtubeIcon, url: "https://www.youtube.com/aquapaka", text: "youtube.com/aquapaka"},
    {image: discordIcon, url: "https://discord.gg/ybu9ssM2PX", text: "Tree housenpm"}
];

const skills: string[] = [
    "Frontend: HTML5/CSS3, Bootstrap 4/5, Javascript ES6, JQuery, React, Typescript",
    "Backend: Java, MVC JSP/Servlet, Spring framework, RestAPI",
    "Database: MySql, Sql Server, Postgresql"
];

const projects: Project[] = [
    {name: "Flappy Boat Java Game", websiteUrl: "", downloadUrl: "https://github.com/aquapaka/flappy-boat-javafx/releases/download/release/flappy-boat-javafx-1.0.jar", repositoryUrl: "https://github.com/aquapaka/flappy-boat-javafx"},
    {name: "SuGarden web", websiteUrl: "https://aquapaka.github.io/sugarden-webapp/", downloadUrl: "", repositoryUrl: "https://github.com/aquapaka/sugarden-webapp"},
    {name: "Low Poly City", websiteUrl: "https://aquapaka.github.io/three-ts-city/", downloadUrl: "", repositoryUrl: "https://github.com/aquapaka/three-ts-city"},
    // {name: "Simple Quiz", websiteUrl: "https://aquapaka.github.io/quiz-react-ts/", downloadUrl: "", repositoryUrl: "https://github.com/aquapaka/quiz-react-ts"},
    {name: "Donation Web Application", websiteUrl: "", downloadUrl: "", repositoryUrl: "https://github.com/aquapaka/donation-webapp"},
]

const App = () => {
    const [loading, setLoading] = useState(true);
    const [secretTheme, setSecretTheme] = useState(false);
    let clickCount = 0;

    const secretClick = () => {
        clickCount++;

        if(clickCount >= 5) {
            setSecretTheme(!secretTheme);
            clickCount = 0;
        }
    }

    useEffect(() => {
        const onLoaded = () => {
            setLoading(false);
        };

        // Check if the page has already loaded
        if (document.readyState === 'complete') {
            onLoaded();
        } else {
            window.addEventListener('load', onLoaded);
            // Remove the event listener when component unmounts
            return () => window.removeEventListener('load', onLoaded);
        }
    }, []);

    return (
        <>
            <GlobalStyle secretTheme={secretTheme}/>
            <Wrapper className="App">
                <LoadingScreen isLoading={loading}/>
                <Avatar text={secretTheme ? "I'm in love with Meimei" : "Hi, I'm Aqua"} imageUrl={secretTheme ? meimeiAvatar : aquapakaAvatar} imageOnClick={secretClick}/>
                <SocialMediaLinks links={links}/>
                <InformationBox header="My Skills" texts={skills} isLoading={loading} secretTheme={secretTheme}/>
                <ProjectBox projects={projects} isLoading={loading} secretTheme={secretTheme}/>
            </Wrapper>
        </>
    );
}

export default App;
