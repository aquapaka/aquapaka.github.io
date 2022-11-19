import React from 'react';

// Styles
import {Wrapper} from "../styles/Avatar.styles";
import {DropShadowImageButton} from "../styles/Utils.styles";

type Props = {
    text: string,
    imageUrl: string
}

const Avatar: React.FC<Props> = ({text, imageUrl}) => (
    <Wrapper>
        <h1>{text}</h1>
        <DropShadowImageButton alt="Avatar" src={imageUrl}/>
    </Wrapper>
);

export default Avatar;

