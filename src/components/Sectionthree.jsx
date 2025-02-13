import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Paragraph from "../ui/paragraph";
import Row from "../ui/Row";
import Tile from "../ui/Title";

const Div = styled.div`
  position: relative;
  left: -60px;
  margin: auto;
  @media (max-width: 768px) {
    left: 0px;
  }
`;
const Img = styled.img`
  width: 600px;
  height: 600px;
  max-width: 100%;
  max-height: 100%;
  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;
export default function Sectionthree() {
  return (
    <div className="section-three">
      <Row>
        <Tile type="addpadding">
          <Heading.H1 type="tall">
            About <br></br> us
          </Heading.H1>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Paragraph>
          <Button>contact us</Button>
        </Tile>
        <Div>
          <Img
            src="../public/WhatsApp Image 2024-01-19 at 00.27 1.png"
            alt=""
          />
        </Div>
      </Row>
    </div>
  );
}
