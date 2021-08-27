import React, { useState, useEffect } from "react";
import { DataProducts } from "../../Data/Product";
import * as S from "./Products-style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Card from "../Card";
import styled from "styled-components";

const Products = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.Tes id="product">
      <h3>Our Products</h3>
      <S.ProductSection>
        <Slider {...settings}>
          {DataProducts.map((value, index) => (
            <Card
              title={value.title}
              image={value.img}
              text={value.text}
              key={index}
            />
          ))}
        </Slider>
      </S.ProductSection>
    </S.Tes>
  );
};

export default Products;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowProducts className={className} onClick={onClick}>
      <FaChevronCircleLeft size={20} />
    </ArrowProducts>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <ArrowProducts className={className} onClick={onClick}>
      <FaChevronCircleRight size={20} />
    </ArrowProducts>
  );
}

const ArrowProducts = styled.div`
  display: block;
`;
