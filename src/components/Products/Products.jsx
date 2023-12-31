import React, { useState, useEffect } from "react";
import { DataProducts } from "../../Data/Product";
import * as S from "./Products-style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import Card from "../Card";
import styled from "styled-components";
import ModalProducts from "../ModalProducts/ModalProducts";
import { useContext } from "react";
import { ContextStore } from "../../Context/ContextStore";

const Products = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  useEffect(() => {
    let handleResize = () => {
      setDimensions({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [dimensions]);

  const settings = {
    dots: dimensions.width < 700 ? false : true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const { getProductId, ModalState } = useContext(ContextStore);

  return (
    <S.Tes id="product">
      <h3>Our Products</h3>
      <S.ProductSection>
        <Slider {...settings}>
          {DataProducts.map((value, index) => (
            <div key={index}>
              <Card
                title={value.title}
                image={value.img}
                text={value.text}
                id={value.id}
                packaging={value.packaging}
                spec={value.spec}
              />
            </div>
          ))}
        </Slider>

        {ModalState && <ModalProducts id={getProductId} />}
      </S.ProductSection>
    </S.Tes>
  );
};

export default Products;

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowProducts className={className} onClick={onClick}>
      <FaChevronCircleLeft size={20} />
    </ArrowProducts>
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <ArrowProducts className={className} onClick={onClick}>
      <FaChevronCircleRight size={20} />
    </ArrowProducts>
  );
}

const ArrowProducts = styled.div`
  display: block;
`;
