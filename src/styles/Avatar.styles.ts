import styled from "styled-components";

export const Wrapper = styled.div`
  & {
    text-align: center;
  }
  
  img {
    width: 120px;
  }

  @media screen and (max-width: 500px) {
    img {
      width: 100px;
    }
  }
`;