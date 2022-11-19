import React from 'react';

import {Wrapper} from "../styles/InformationBox.styles";
import {DropShadowNormalButton} from "../styles/Utils.styles";
import {ProjectItem} from "../styles/ProjectBox.styles";

export type Project = {
    name: string,
    websiteUrl: string,
    repositoryUrl: string
}

type Props = {
    projects: Project[]
}

const ProjectBox: React.FC<Props> = ({projects}) => (
    <Wrapper>
        <h2>My Projects</h2>
        <ul>
            {projects.map(project => (
                <li>
                    <ProjectItem>
                        {project.name}
                        <span>
                            <DropShadowNormalButton href={project.websiteUrl} target="_blank">View</DropShadowNormalButton>
                            <DropShadowNormalButton href={project.repositoryUrl} target="_blank">Repository</DropShadowNormalButton>
                        </span>
                    </ProjectItem>
                </li>
            ))}
        </ul>
    </Wrapper>
)

export default ProjectBox;