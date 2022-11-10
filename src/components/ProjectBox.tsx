import React from 'react';

export type Project = {
    name: string,
    websiteUrl: string,
    repositoryUrl: string
}

type Props = {
    projects: Project[]
}

const ProjectBox: React.FC<Props> = ({projects}) => (
    <div>
        <h2>My Projects</h2>
        <ul>
            {projects.map(project => (
                <li>
                    {project.name}
                    <a href={project.websiteUrl}>View</a>
                    <a href={project.repositoryUrl}>Repository</a>
                </li>
            ))}
        </ul>
    </div>
)

export default ProjectBox;