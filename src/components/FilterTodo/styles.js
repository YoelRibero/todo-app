import styled from 'styled-components'

export const FilerContainer = styled.section`
  background-color: ${props => props.darkTheme ? 'hsl(235, 24%, 19%)' : '#fff'};
  border-radius: 0.5rem;
  box-shadow: 0px 20px 33px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem;
  span {
    color: hsl(236, 9%, 61%);
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 1rem;
    text-transform: capitalize;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: hsl(220, 98%, 61%);
      text-decoration: none;
    }
  }
`;
