import styled from "styled-components";

const Button = styled.button`
  color: blue;
  font-weight: bold;
  border: 1px solid blue;
  height: 30px;
  width: 80px;
  background: whitesmoke;
  transition: all 0.5s ease;
  margin-top: 50px;
  margin-bottom: 50px;

  &:hover {
    color: whitesmoke;
    border: whitesmoke 1px solid;
    background: blue;
    cursor: pointer;
  }
`;

export default Button;
