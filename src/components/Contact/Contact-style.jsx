import styled from "styled-components";
import { StyledContainer, colors } from "../../style";

export const Background = styled.div`
  background-color: ${colors.lightGreen};
  padding: 50px 0 100px 0;
`;

export const ContactSection = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-bottom: 150px; */
`;

export const ContactContainer = styled.div`
  /* background-color: red; */
  width: 50%;

  & > p {
    color: black;
    margin-bottom: 30px;
  }

  & > h3 {
    color: ${colors.darkGreen};
    padding-bottom: 30px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const LogoContainer = styled.div`
  & > img {
    /* width: 300px; */
    max-width: 500px;
    height: auto;
  }

  @media (max-width: 900px) {
    display: none;
    width: 1%;
  }
`;

export const InputNameEmail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const labelInputName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;

  & > input {
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: 10px 15px;
    margin: 10px 0 0 0;
    border: none;
    outline: none;
  }

  & > div {
    width: 100%;
    height: 3px;
    background-color: ${colors.darkGreen};
  }
`;

export const labelInputEmail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;

  & > input {
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: 10px 15px;
    margin: 10px 0 0 0;
    border: none;
    outline: none;
  }

  & > div {
    width: 100%;
    height: 3px;
    background-color: ${colors.darkGreen};
  }
`;

export const CustomInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > textarea {
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: 10px 15px;
    margin: 10px 0 0 0;
    border: none;
    outline: none;
  }

  & > input {
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    padding: 10px 15px;
    margin: 10px 0 0 0;
    border: none;
    outline: none;
  }

  & > div {
    width: 100%;
    height: 3px;
    background-color: ${colors.darkGreen};
  }
`;

export const ButtonJumbotron = styled.div`
  border: 2px solid ${colors.darkGreen};
  border-radius: 6px;
  padding: 10px 24px;
  color: ${colors.darkGreen};
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  background-color: transparent;
  width: 200px;
  text-align: center;
  box-shadow: 0 0 5px white;
  cursor: pointer;
  margin-right: 30px;
`;

export const Action = styled.div`
  display: flex;
  margin-top: 30px;
`;
