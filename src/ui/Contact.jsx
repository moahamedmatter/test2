import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Ul = styled.ul`
  flex-basis: 50%;
  padding-right: 16px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
  @media (max-width: 550px) {
    flex-basis: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;
const Li = styled.li`
  font-size: 20px;
  width: 40px;
  height: 40px;
  background: var(--main-color);
  text-align: center;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color);
  cursor: pointer;
  transition: all var(--main-transition);
  &:hover {
    color: var(--main-color);
    background: var(--color);
  }
  margin-bottom: 10px;
`;
const Contac = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: flex;
`;
const Div = styled.div`
  background-color: var(--main-color);
  text-align: center;
  flex-basis: 50%;
  position: relative;
  @media (max-width: 550px) {
    display: none;
  }
`;
const Span = styled.span`
  color: var(--color);
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 17px;
  font-weight: 700;
`;
export default function Contact() {
  return (
    <Contac>
      <Ul>
        <Li>
          <FaFacebook />
        </Li>
        <Li>
          <FaInstagram />
        </Li>
        <Li>
          <FaTwitter />
        </Li>
        <Li>
          <FaTelegram />
        </Li>
      </Ul>
      <Div>
        <Span>Telephone:+7 700 000 00 00</Span>
      </Div>
    </Contac>
  );
}
