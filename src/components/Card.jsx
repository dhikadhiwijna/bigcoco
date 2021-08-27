import styled from "styled-components";
import React from "react";

const Card = ({ image, text, title }) => {
  return (
    <CardSection>
      <CardContainer>
        <TextContainer>
          <h4>{title}</h4>
          <img src={image} alt="imgmobile" />
          <p>{text}</p>
          <ButtonJumbotron>See Details</ButtonJumbotron>
        </TextContainer>
        <ImageContainer>
          <img src={image} alt="imageCard" />
        </ImageContainer>
      </CardContainer>
    </CardSection>
  );
};

export default Card;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
`;

const CardContainer = styled.div`
  background-color: white;
  max-width: 1400px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  padding: 0 100px;

  @media (max-width: 576px) {
    max-width: 350px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: auto;

  & > img {
    object-fit: cover;
    max-width: 100%;
    background-color: white;
    border-radius: 20px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  & > p {
    padding-top: 50px;
    color: black;
    text-align: left;
    max-width: 500px;
  }

  & > h4 {
    text-align: left;
    padding-bottom: 30px;
  }

  & > img {
    display: none;
  }

  @media (max-width: 576px) {
    align-items: center;
    height: 400px;

    & > p {
      display: none;
    }

    & > h4 {
      text-align: center;
    }

    & > img {
      display: block;
      object-fit: cover;
      max-width: 150px;
      background-color: white;
      border-radius: 20px;
    }
  }
`;

const ButtonJumbotron = styled.div`
  margin-top: 56px;
  border: 1px solid #fff;
  border-radius: 6px;
  padding: 10px 24px;
  color: black;
  font-family: "Montserrat", sans-serif;
  /* font-weight: 700; */
  font-size: 18px;
  line-height: 32px;
  /* background-color: black; */
  border: 1px solid black;
  width: 150px;
  cursor: pointer;
`;
