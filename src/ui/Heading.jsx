import styled, { css } from "styled-components";
const H1 = styled.h1`
  ${(props) =>
    props.type === "tall" &&
    css`
      line-height: 50px;
      margin-bottom: 0rem;
    `}
  ${(props) =>
    props.type === "receip" &&
    css`
      text-align: center;
      margin: 3rem 0;
      color: var(--main-color);
    `}
  ${(props) =>
    props.type === "testymonials" &&
    css`
      text-align: center;
      margin: 3rem 0;
      color: var(--color);
      @media (max-width: 768px) {
        margin: 2rem 0;
        font-size: 3rem;
      }
    `}
  ${(props) =>
    props.type === "contact-us" &&
    css`
      text-align: center;
      margin: 3rem 0;
      color: var(--main-color);
      word-spacing: 5px;
    `}
  font-size: 4rem;
  font-weight: 800;
  line-height: 50px;
  text-transform: uppercase;
  text-align: center;
`;
const H3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  letter-spacing: 2px;
  ${(props) =>
    props.type === "tall" &&
    css`
      margin-bottom: 0rem;
      padding-bottom: 0rem;
      color: var(--main-color);
    `}
  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export default { H1, H3 };
