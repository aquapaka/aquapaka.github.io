import styled, {keyframes} from "styled-components";

type Props = {
    isLoading: boolean,
    animationDelay: number
}

const fadeOutAnimation = keyframes`
    0% {
      opacity: 1;
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
`;

export const Wrapper = styled.div<Props>`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: #08a8f3;
  animation: ${fadeOutAnimation} 0.3s ease-in ${props => props.animationDelay}s forwards ${props => props.isLoading ? "pause" : "running"};
`;

export const LoadingIcon = styled.div`
  /**
    * Flip to square
    *
    * @author jh3y - jheytompkins.com
  */
  @-webkit-keyframes flip-to-square {
    0% {
      -webkit-transform: rotateX(-90deg);
      transform: rotateX(-90deg); }
    50%,
    75% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0); }
    100% {
      opacity: 0;
      -webkit-transform: rotateX(0);
      transform: rotateX(0); } 
  }
  
  @keyframes flip-to-square {
    0% {
      -webkit-transform: rotateX(-90deg);
      transform: rotateX(-90deg); }
    50%,
    75% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0); }
    100% {
      opacity: 0;
      -webkit-transform: rotateX(0);
      transform: rotateX(0); } 
  }

  & {
    display: grid;
    margin: 40vh auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 120px;
    width: 120px;
  }
  
  & div {
    -webkit-animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
    animation: flip-to-square 1.5s calc(var(--delay) * 1s) infinite backwards;
    background-color: #fff; }
  & div:nth-child(1) {
    --delay: 0.1; }
  & div:nth-child(2) {
    --delay: 0.2; }
  & div:nth-child(3) {
    --delay: 0.3; }
  & div:nth-child(4) {
    --delay: 0.4; }
  & div:nth-child(5) {
    --delay: 0.5; }
  & div:nth-child(6) {
    --delay: 0.6; }
  & div:nth-child(7) {
    --delay: 0.7; }
  & div:nth-child(8) {
    --delay: 0.8; }
  & div:nth-child(9) {
    --delay: 0.9; }    
`;