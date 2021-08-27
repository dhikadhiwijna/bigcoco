import styled from "styled-components";
import { colors } from "../../style";

export const HeaderSection = styled.div`
  display: flex;
  height: 100vh;
  position: relative;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

export const HeaderTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(17%, 50%);
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
    margin-top: 50px;
  }
`;

export const QuoteDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
  @media (max-width: 990px) {
    display: none;
  }

  & > h5 {
    color: ${colors.white};
    margin-left: 25px;
    max-width: 470px;
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
  border-radius: 6px;
  padding: 10px 24px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  background-color: transparent;
  width: 150px;
`;
