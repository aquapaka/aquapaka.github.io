import styled from "styled-components";

export const Wrapper = styled.div`
  & {
    display: flex;
    justify-content: center;
    margin: 16px;
    gap: 8px;
  }
  
  span {
    display: none;
  }
  
  img {
    width: 55px;
  }
  
  @media screen and (max-width: 500px) {
    img {
      width: 40px;
    }
  }
`;