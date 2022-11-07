import React from 'react';

type Props = {
    text: string,
    imageUrl: string
}

const Avatar: React.FC<Props> = ({text, imageUrl}) => (
    <div>
        <h1>{text}</h1>
        <img alt="Avatar" src={imageUrl}/>
    </div>
);

export default Avatar;

