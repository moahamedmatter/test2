/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import styled from "styled-components";

const Img = styled.img`
  max-width: 100%;
  border-radius: 8px;
`;
const H3 = styled.h3`
  color: var(--main-color);
`;
const Element = styled.div`
  border-radius: 8px;
  border: 1px solid var(--main-color);
  text-align: center;
`;
const Para = styled.p`
  color: gray;
  padding: 8px;
`;
export default function Item({ el }) {
  const { idMeal, strMeal, strMealThumb } = el;
  return (
    <Element>
      <Img src={strMealThumb} alt="" />
      <H3>{strMeal}</H3>
      <Para>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        magnam similique sint soluta eum saepe! Laudantium officia inventore
        aliquam explicabo ex! Eos possimus vero neque sapiente, deserunt illum
        inventore optio!
      </Para>
    </Element>
  );
}
// display: grid;
// grid-template-columns: repeat(auto-fill,minmax(300px,1fr));
// gap: 40px;
