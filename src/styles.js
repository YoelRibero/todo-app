import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');
  body {
    background-color: ${props => props.darkTheme ? 'hsl(235, 21%, 11%)' : 'hsl(0, 0%, 98%)'};
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }
  img {
    height: auto;
    min-width: 100%;
    max-width: 100%;
    animation: .5s imageAnimation ease;
  }
  @keyframes imageAnimation {
    from {
      filter: blur(5px);
      opacity: 0;
    }
    to {
      filter: blur(0);
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  padding: 0 1.5rem;
  @media screen and (min-width: 768px) {
    margin: 0 auto;
    max-width: 768px;
  }
`;
