import React, {MouseEventHandler} from 'react';

// Styles
import {Wrapper} from "../styles/Avatar.styles";
import {DropShadowImageButton} from "../styles/Utils.styles";

type Props = {
    text: string,
    imageUrl: string,
    imageOnClick: MouseEventHandler,
}

const Avatar: React.FC<Props> = ({text, imageUrl, imageOnClick}) => (
    <Wrapper>
        <h1>{text}</h1>
        <DropShadowImageButton alt="Avatar" src={imageUrl} onClick={imageOnClick}/>
    </Wrapper>
);

export default Avatar;

