/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import { FaStar } from "react-icons/fa6";
import Paragraph from "../ui/paragraph";
import Row from "../ui/Row";
import Tile from "../ui/Title";
const DivContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;
const Para = styled.p`
  color: gray;
  padding: 8px;
`;
const Ul = styled.ul`
  color: var(--main-color);
  display: flex;
  gap: 8px;
  font-size: 1.5rem;
`;
export default function Sectionfive() {
  return (
    <div>
      <Row type="color">
        <Heading.H1 type="testymonials">testymonials</Heading.H1>
        <DivContainer>
          <Tile type="zz">
            <Heading.H3 type="tall">Kathryn Murphy</Heading.H3>
            <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Para>
            <Ul>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </Ul>
          </Tile>
          <Tile type="zz">
            <Heading.H3 type="tall">Kathryn Murphy</Heading.H3>
            <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Para>
            <Ul>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </Ul>
          </Tile>
          <Tile type="zz">
            <Heading.H3 type="tall">Kathryn Murphy</Heading.H3>
            <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Para>
            <Ul>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </Ul>
          </Tile>
          <Tile type="zz">
            <Heading.H3 type="tall">Kathryn Murphy</Heading.H3>
            <Para>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Para>
            <Ul>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
              <li>
                <FaStar />
              </li>
            </Ul>
          </Tile>
        </DivContainer>
        <Button>contact us</Button>
      </Row>
    </div>
  );
}
