import styled from "styled-components";

export const Wrapper = styled.div`
  & {
    background: #60c4f2;
    margin: 20px;
    padding: 12px;
    -webkit-box-shadow: 0px 4px var(#23313f), 0px -4px var(#23313f), 4px 0px var(#23313f), -4px 0px var(#23313f);
    box-shadow: 0px 4px #23313f, 0px -4px #23313f, 4px 0px #23313f, -4px 0px #23313f;
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