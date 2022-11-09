import React from 'react';

export type Link = {
    image: string,
    url: string,
    text: string
}

type Props = {
    links: Link[];
}

const SocialMediaLinks: React.FC<Props> = ({links}) => (
    <div>
        {links.map(link => (
            <div>
                <a href={link.url}>
                    <img src={link.image} alt={link.text}/>
                    <span>{link.text}</span>
                </a>
            </div>
        ))}
    </div>
);

export default SocialMediaLinks;