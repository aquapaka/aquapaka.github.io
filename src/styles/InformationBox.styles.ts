import styled, {keyframes} from "styled-components";

export const slideIn = keyframes`
    0% {
      opacity: 0;
      left: 400px;
    }
  
    100% {
      opacity: 1;
      left: 0px;
    }
`;

type Props = {
    animationDelay: number,
    isLoading: boolean
}

export const Wrapper = styled.div<Props>`
  & {
    position: relative;
    opacity: 0;
    left: 400px;
    background: #60c4f2;
    margin: 24px auto;
    padding: 12px;
    -webkit-box-shadow: 0px 4px var(#23313f), 0px -4px var(#23313f), 4px 0px var(#23313f), -4px 0px var(#23313f);
    box-shadow: 0px 4px #23313f, 0px -4px #23313f, 4px 0px #23313f, -4px 0px #23313f;
    max-width: 800px;
    -webkit-animation: ${slideIn} 0.5s ease-out ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
    animation: ${slideIn} 0.5s ease-out ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
  }
  
  ul {
    padding: 0 0 0 25px;
  }
  
  li {
    list-style: square;
  }
  
  h2 {
    margin: 0;
  }
`;