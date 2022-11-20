import React from 'react';

import {Wrapper} from "../styles/InformationBox.styles";

type Props = {
    isLoading: boolean,
    header: string,
    texts: string[]
}

const InformationBox: React.FC<Props> = ({header, texts, isLoading}) => (
    <Wrapper isLoading={isLoading} animationDelay={1.1}>
        <h2>{header}</h2>
        <ul>
            {texts.map(text => (
                <li>{text}</li>
            ))}
        </ul>
    </Wrapper>
)

export default InformationBox;