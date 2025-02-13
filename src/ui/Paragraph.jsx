import styled from "styled-components";
const Paragraph = styled.p`
  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem;
    padding: 0 20px;
  }
  line-height: 2rem;
  font-size: 1.3rem;
  letter-spacing: 2px;
  width: calc(100% - 200px);
  margin: 2rem;
  text-align: center;
`;
export default Paragraph;
