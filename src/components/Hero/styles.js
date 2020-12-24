import styled from 'styled-components'

export const HeroContent = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: -11rem;
  h1 {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 1rem;
    margin: 0;
    text-transform: uppercase;
  }
  img {
    height: 30px;
    min-width: auto;
    width: 30px;
    display: inline-block;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    margin-top: -7rem;
  }
  @media screen and (min-width: 1024px) {
    margin-top: -12rem;
  }
`;
