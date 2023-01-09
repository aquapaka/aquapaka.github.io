import styled, {keyframes} from "styled-components";

export const slideIn = keyframes`
    0% {
      opacity: 0;
      left: 400px;
    }
  
    100% {
      opacity: 1;
      left: 0;
    }
`;

type Props = {
    animationDelay: number,
    isLoading: boolean,
    secretTheme: boolean
}

export const Wrapper = styled.div<Props>`
  position: relative;
  opacity: 0;
  left: 400px;
  background: ${props => props.secretTheme ? "#fcda96" : "#60c4f2"};
  margin: 24px auto;
  padding: 12px;
  -webkit-box-shadow: 0 3px var(#23313f), 0px -3px var(#23313f), 3px 0px var(#23313f), -3px 0px var(#23313f);
  box-shadow: 0 3px #23313f, 0px -3px #23313f, 3px 0px #23313f, -3px 0px #23313f;
  max-width: 800px;
  -webkit-animation: ${slideIn} 0.5s ease-out ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
  animation: ${slideIn} 0.5s ease-out ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
  
  ul {
    padding: 0 0 0 20px;
    margin: 12px 0;
  }
  
  li {
    list-style: square;
  }
  
  h2 {
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    padding: 6px;
  }
`;