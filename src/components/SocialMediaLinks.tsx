import React from 'react';

// Styles
import {Wrapper} from "../styles/SocialMediaLinks.styles";
import {DropShadowImageButton} from "../styles/Utils.styles";

export type Link = {
    image: string,
    url: string,
    text: string
}

type Props = {
    links: Link[];
}

const SocialMediaLinks: React.FC<Props> = ({links}) => (
    <Wrapper>
        {links.map(link => (
            <>
                <a href={link.url} target="_blank" rel="noreferrer">
                    <DropShadowImageButton src={link.image} alt={link.text}/>
                </a>
                <span>{link.text}</span>
            </>
        ))}
    </Wrapper>
);

export default SocialMediaLinks;