import styled from "styled-components";
import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Image from "../ui/Image";
import Paragraph from "../ui/paragraph";
import Row from "../ui/Row";
import Tile from "../ui/Title";
const Divparagraph = styled.div`
  padding: 2rem 0;
  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  color: var(--main-color);
`;
export default function Sectiontwo() {
  return (
    <div>
      <Row type="half">
        <Divparagraph>
          <Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the
          </Paragraph>
        </Divparagraph>
        <Tile type="notpadding">
          <Heading.H1 type="tall">
            How we<br></br>work
          </Heading.H1>
          <Image />
          <Button>contact us</Button>
        </Tile>
      </Row>
    </div>
  );
}
