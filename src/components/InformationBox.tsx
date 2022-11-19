import React from 'react';

import {Wrapper} from "../styles/InformationBox.styles";

type Props = {
    header: string,
    texts: string[]
}

const InformationBox: React.FC<Props> = ({header, texts}) => (
    <Wrapper>
        <h2>{header}</h2>
        <ul>
            {texts.map(text => (
                <li>{text}</li>
            ))}
        </ul>
    </Wrapper>
)

export default InformationBox;