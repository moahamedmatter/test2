/* eslint-disable no-unused-vars */
// import styled from "styled-components";// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  HashNavigation,
} from "swiper/modules";
import { useState } from "react";
import { useEffect } from "react";
import Heading from "../ui/Heading";
import Item from "../ui/Item";
import Button from "../ui/Button";
import styled from "styled-components";
const Divcontainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;
export default function Sectionfour() {
  const [data, setData] = useState([]);
  useEffect(function () {
    const fetchData = async () => {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast"
      );
      const data = await response.json();
      setData(data.meals);
    };
    fetchData();
  }, []);
  return (
    <Divcontainer>
      <Heading.H1 type="receip">Recipes</Heading.H1>
      <Swiper
        // spaceBetween={25}
        // cssMode={true}
        // navigation={true}
        // mousewheel={true}
        // modules={[Navigation, Pagination, Mousewheel, Keyboard, HashNavigation]}
        // pagination={{
        //   clickable: true,
        // }}
        // scrollbar={{ draggable: true }}
        // // modules={[Pagination, Navigation]}
        // hashNavigation={{
        //   watchState: true,
        // }}
        // // modules={[Pagination, Navigation, HashNavigation]}
        // grabCursor={true}
        // className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((el) => (
          <>
            <SwiperSlide>
              <Item el={el} key={el.idMeal} />
            </SwiperSlide>
          </>
        ))}
      </Swiper>
      <Button>contact us</Button>
    </Divcontainer>
  );
}
