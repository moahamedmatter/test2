import styled from "styled-components";
import Button from "../ui/Button";
import Contact from "../ui/Contact";
import Header from "../ui/Header";
import Heading from "../ui/Heading";
import Paragraph from "../ui/paragraph";
import Row from "../ui/Row";
const Img = styled.img`
  max-width: 100%;
  grid-column: 1;
  grid-area: auto;
  margin: auto 0;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export default function Sectionone() {
  return (
    <div>
      <Row>
        <Header>
          <Heading.H3>Peachy Pup Bakery</Heading.H3>
          <Heading.H1>Tasty pastries</Heading.H1>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the
          </Paragraph>
          <Button> see more</Button>
        </Header>
        <Img src="../Place Your Image Here (Double Click to Edit)_ 1.png" />
        <Contact />
      </Row>
    </div>
  );
}
