import styled from "styled-components";
import { colors, StyledContainer } from "../../style";

export const NavbarSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: all 0.3s ease;
  background-color: ${({ shadow }) => (shadow ? colors.darkGreen : "unset")};
  box-shadow: ${({ shadow }) =>
    shadow ? `0px 7px 10px rgba(0, 0, 0, 0.07)` : "unset"};
`;

export const NavbarContainer = styled(StyledContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ shadow }) => (shadow ? "80px" : "100px")};
  /* width: 100px; */

  & > h3 {
    transition: all 0.5s ease;
    color: ${colors.white};

    &:hover {
      color: white;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > img {
    width: 50px;
    margin-right: 10px;
    height: auto;
  }

  & > h4 {
    color: white;

    &:hover {
      text-shadow: 0 0 2px white;
      transition: all 0.7s ease;
    }
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > div {
    width: 70%;
    height: 2px;
    border-radius: 2px;
    margin-top: 5px;
  }

  &:hover {
    & > .link {
      text-shadow: 0 0 2px white;
    }

    & > div {
      background-color: white;
      box-shadow: 0 0 2px white;
      transition: all 0.5s ease;
    }
  }

  @media (max-width: 990px) {
    display: none;
  }
`;

export const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

export const SlideContainer = styled.div`
  display: none;
  cursor: pointer;
  padding-right: 20px;

  @media (max-width: 990px) {
    display: inline-block;
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
