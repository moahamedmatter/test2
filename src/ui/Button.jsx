import styled, { css } from "styled-components";
export const Button = styled.button`
  padding: 0px 30px;
  border-radius: 30px;
  border: none;
  outline: none;
  color: var(--color);
  background: var(--orange-color);
  height: 45px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  ${(props) =>
    props.type === "submit" &&
    css`
      border-radius: 25px;
      font-size: 24px;
      color: var(--main-color);
      width: 50%;
      border: 2px solid var(--main-color);
      border-color: var(--main-color);
      background-color: transparent;
      height: 50px;
      font-weight: 600;
    `}
`;
export default Button;
