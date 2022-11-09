import React from 'react';

type Props = {
    header: string,
    texts: string[]
}

const InformationBox: React.FC<Props> = ({header, texts}) => (
    <div>
        <h2>{header}</h2>
        <ul>
            {texts.map(text => (
                <li>{text}</li>
            ))}
        </ul>
    </div>
)

export default InformationBox;