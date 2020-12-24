import styled from 'styled-components'

export const ContainerListOfTodo = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0px 20px 33px 0px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin-top: 2rem;
  .sc-dlfnbm {
    border-radius: 0;
    box-shadow: none;
    margin: 0;
  }
`;

export const ContainerListFooter = styled.section`
  background-color: ${props => props.darkTheme ? 'hsl(235, 24%, 19%)' : '#fff'};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
  span {
    color: hsl(236, 9%, 61%);
    font-size: .9rem;
    &:last-child {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
