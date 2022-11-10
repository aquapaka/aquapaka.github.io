import React, {useState} from 'react';

// Images
import aquapakaAvatar from './images/Aquatixel Pixel Art 800x800.png';
import meimeiAvatar from './images/My Love Pixel Art 800x800.png';
import emailIcon from './images/Email.png';
import linkedinIcon from './images/Linkedin.png';
import githubIcon from './images/Github.png';
import youtubeIcon from './images/Youtube.png';

// Components
import Avatar from "./components/Avatar";
import SocialMediaLinks from "./components/SocialMediaLinks";
import InformationBox from "./components/InformationBox";

// Types
import {Link} from "./components/SocialMediaLinks";
import ProjectBox, {Project} from "./components/ProjectBox";

// Const
const links: Link[] = [
    {image: emailIcon, url: "mailto:aqua.tamlong@gmail.com", text: "aqua.tamlong@gmail.com"},
    {image: linkedinIcon, url: "https://www.linkedin.com/in/aquapaka/", text: "linkedin.com/in/aquapaka/"},
    {image: githubIcon, url: "https://github.com/aquapaka", text: "github.com/aquapaka"},
    {image: youtubeIcon, url: "https://www.youtube.com/aquapaka", text: "youtube.com/aquapaka"}
];

const skills: string[] = [
    "Frontend: HTML5/CSS3, Bootstrap 4/5, Javascript ES6, JQuery, React, Typescript",
    "Backend: Java, MVC JSP/Servlet, Spring framework, RestAPI",
    "Database: MySql, Sql Server, Postgresql"
];

const projects: Project[] = [
    {name: "Quiz app", websiteUrl: "https://aquapaka.github.io/quiz-react-ts/", repositoryUrl: "https://github.com/aquapaka/quiz-react-ts"},
    {name: "Quiz app", websiteUrl: "https://aquapaka.github.io/quiz-react-ts/", repositoryUrl: "https://github.com/aquapaka/quiz-react-ts"},
]

const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <div className="App">
            <Avatar text={"Hi, I'm Aqua"} imageUrl={aquapakaAvatar}/>
            <SocialMediaLinks links={links}/>
            <InformationBox header="My Skills" texts={skills}/>
            <ProjectBox projects={projects}/>
        </div>
    );
}

export default App;
