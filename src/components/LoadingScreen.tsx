import React, {useState} from 'react';

import {Wrapper, LoadingIcon} from "../styles/LoadingScreen.styles";

type Props = {
    isLoading: boolean
}

const LoadingScreen: React.FC<Props> = ({isLoading}) => (
    <Wrapper isLoading={isLoading} animationDelay={0.3}>
            <LoadingIcon>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
            </LoadingIcon>
    </Wrapper>
);

export default LoadingScreen;