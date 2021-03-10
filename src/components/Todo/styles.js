import styled from 'styled-components'

export const TodoContainer = styled.form`
  align-items: center;
  background-color: ${(props) =>
    props.darkTheme ? "hsl(235, 24%, 19%)" : "#fff"};
  border-radius: .5rem;
  box-shadow: 0px 20px 33px 0px rgba(0,0,0,0.20);
  box-sizing: border-box;
  display: flex;
  margin-top: 2rem;
  padding: .8rem 1rem;
  position: relative;
  width: 100%;
  input[type="text"] {
    background: transparent;
    border: 0;
    box-sizing: border-box;
    color: hsl(236, 9%, 61%);
    font-family: 'Josefin Sans', sans-serif;
    font-size: .9rem;
    outline: none;
    width: 100%;
  }
  > img {
    max-width: 15px;
    height: 15px;
    min-width: auto;
    @media screen and (min-width: 801px) {
      display: none;
    }
  }
  &.with-title {
    border-bottom: 1px solid ${(props) =>
      props.darkTheme ? "#414462" : "hsl(233, 11%, 84%)"};
    input[type="text"] {
      cursor: grab;
      color: transparent;
      text-shadow: 0 0 0 #333;
    }
    > div {
      &:hover {
        border-color: hsl(192, 100%, 67%);
        &::after {
          content: "";
          position: absolute;
          width: 21px;
          height: 21px;
          display: block;
          border: 1px solid hsl(280, 87%, 65%);
          border-top-left-radius: 11px;
          border-top-right-radius: 11px;
          border-bottom-left-radius: 11px;
          border-bottom: 0;
          border-right: 0;
        }
      }
    }
    @media screen and (min-width: 801px) {
      &:hover {
        > img {
          display: block;
        }
      }
    }
  }
  &.complete {
    input[type="text"] {
      text-decoration: line-through;
      text-shadow: 0 0 0 #a9a9a9;
    }
    > div {
      background-image: linear-gradient(
        to bottom right,
        hsl(192, 100%, 67%),
        hsl(280, 87%, 65%)
      );
      &:hover {
        border: 1px solid hsl(233, 11%, 84%);
        &::after {
          display: none;
        }
      }
    }
  }
  &.darkTheme.with-title {
    input[type="text"] {
      text-shadow: 0 0 0 #ddd;
    }
    &.complete {
      input[type="text"] {
        text-shadow: 0 0 0 #696969;
      }
    }
  }
`;

export const CheckboxFalse = styled.div`
  align-items: center;
  border: 1px solid hsl(233, 11%, 84%);
  border-radius: 50%;
  display: flex;
  min-height: 20px;
  justify-content: center;
  min-width: 20px;
  position: relative;
  margin-right: .5rem;
  img {
    height: 40%;
    width: 40%;
    min-width: auto;
  }
`;
