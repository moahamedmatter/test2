import styled, { css } from "styled-components";
const Row = styled.div`
  background-image: url("../Mask\ Group.png");
  background-size: contain;
  position: relative;
  min-height: 100vh;
  ${(props) =>
    props.type === "nothalf" &&
    css`
      grid-template-columns: 2fr 1fr;
      display: grid;
      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    `}
  ${(props) =>
    props.type === "half" &&
    css`
      grid-template-columns: 1fr 1fr;
      display: grid;
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `}
  ${(props) =>
    props.type === "color" &&
    css`
      padding-bottom: 2rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      background-color: rgba(201, 138, 64, 0.5);
      background-blend-mode: overlay;
    `}
`;
Row.defaultProps = {
  type: "nothalf",
};
export default Row;

// min-height: 100vh;
// display: grid;
// grid-template-columns: 1fr 1fr;
// background-image: url(../public/Mask\ Group.png);
// background-size: contain;
// position: relative;
