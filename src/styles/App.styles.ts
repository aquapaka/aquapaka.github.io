import styled, {createGlobalStyle} from 'styled-components';

// @ts-ignore
import GnuUnifontFull from './fonts/GnuUnifontFull.woff2';

type Props = {
  secretTheme: boolean
}

export const GlobalStyle = createGlobalStyle<Props>`
  @font-face {
    font-family: 'GnuUnifontFull';
    src: local('GnuUnifontFull'), url(${GnuUnifontFull}) format('woff2');
    /* other formats include: 'woff2', 'truetype, 'opentype',
                              'embedded-opentype', and 'svg' */
  }

  html {
    height: 100%;
  }

  body {
    background: ${props => props.secretTheme ? "#ffc207" : "#08a8f3"};
  }

  * {
    font-family: 'GnuUnifontFull', sans-serif;
    font-size: 16px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 22px;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 20px;
    }
  }
`

export const Wrapper = styled.div`

`;