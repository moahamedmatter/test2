import styled, { css } from "styled-components";
const Tile = styled.div`
  background-color: var(--main-color);
  color: var(--color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;
  ${(props) =>
    props.type === "addpadding" &&
    css`
      padding: 2rem 0 3rem 0;
    `}
  ${(props) =>
    props.type === "notpadding" &&
    css`
      padding: 2rem 0;
    `}
  ${(props) =>
    props.type === "zz" &&
    css`
      border-radius: 12px;
      padding: 2rem;
      background-color: var(--color);
      align-items: flex-start;
    `}
`;
export default Tile;
//
