import styled from "styled-components";
import { colors } from "../../style";

export const HeaderSection = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  /* & > img {
    width: 100%;
    object-fit: cover;
  } */

  & > video {
    width: 100%;
    object-fit: cover;
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg); /* Safari and Chrome */
    -moz-transform: rotateY(180deg); /* Firefox */
  }
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(17%, 80%);
  /* background-color: red; */
  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    max-width: 70%;
  }

  /* @media (max-width: 800px){
    max-width: ;
  }  */

  & > h1 {
    color: ${colors.white};
    width: 700px;
    max-width: 100%;
    margin-top: 30px;
  }
`;

export const QuoteDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 990px) {
    display: none;
  }

  & > h4 {
    color: ${colors.white};
    /* margin-left: 25px; */
    max-width: 470px;
    font-weight: 100;
  }

  & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`;

export const ButtonJumbotron = styled.div`
  margin-top: 56px;
  border: 1px solid #fff;
  border-radius: 50px;
  padding: 10px 24px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  background-color: transparent;
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 4px white;
    box-shadow: 0 0 4px white;
  }
`;

export const Box = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;

  & > .times {
    z-index: 101;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.darkGreen};
`;

export const ModalLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  margin-top: 30px;
  /* background-color: red; */
  width: 100%;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;

  & > h3 {
    color: white;
  }
`;
