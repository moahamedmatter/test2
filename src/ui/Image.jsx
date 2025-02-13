import styled from "styled-components";
const Images = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: absolute;
  top: 65%;
  left: 0;
  padding: 0 20px;
  transform: translate(-50%, -50%);
  @media (max-width: 1100px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    position: relative;
    padding: 3rem 0;
    top: 0;
    left: 0;
    transform: translate(0, 0);
  }
`;

const Img = styled.img`
  width: 250px;
  height: 250px;
  max-width: 100%;
  border-radius: 12px;
`;
export default function Image() {
  return (
    <Images>
      <Img src="../WhatsApp Image 2024-01-19 at 00.27 (2).jpg" />
      <Img src="../WhatsApp Image 2024-01-19 at 00.27 (2).jpg" />
      <Img src="../WhatsApp Image 2024-01-19 at 00.27 (3).jpg" />
      <Img src="../WhatsApp-Image.jpg" />
    </Images>
  );
}
