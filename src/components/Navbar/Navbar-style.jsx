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


    /* &:hover {
      border-bottom: 1px solid white;
    } */
  }
`;
