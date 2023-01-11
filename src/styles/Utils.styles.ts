import styled from "styled-components";

export const DropShadowImageButton = styled.img`
  filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.7));

  @media (hover: hover) {
    &:hover {
      filter: drop-shadow(8px 8px rgba(0, 0, 0, 0.7));
      transform: translate(-2px, -2px);
    }
  }

  &:active {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.7));
    transform: translate(2px, 2px);
  }
`;

export const DropShadowNormalButton = styled.a`
  display: ${props => props.href ? "inline-block" : "none"};
  color: #000;
  text-decoration: none;
  background: #fff;
  margin: 4px;
  padding: 4px 16px;
  filter: drop-shadow(4px 4px rgba(0, 0, 0, 0.7));

  @media (hover: hover) {
    &:hover {
      filter: drop-shadow(8px 8px rgba(0, 0, 0, 0.7));
      transform: translate(-2px, -2px);
    }
  }

  &:active {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.7));
    transform: translate(2px, 2px);
  }

  @media screen and (max-width: 500px) {
    padding: 4px 8px;
  }
`;

