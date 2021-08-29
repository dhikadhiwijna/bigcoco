import React, { useContext } from "react";
import styled from "styled-components";
import { colors } from "../../style";
import { FaTimes } from "react-icons/fa";
import { ContextStore } from "../../Context/ContextStore";
import { Link } from "react-scroll";

const ModalNavbar = ({ display }) => {
  const { NavbarDispatch } = useContext(ContextStore);

  return (
    <div>
      <Box display={display}>
        <BoxContainer>
          <ModalLogo>
            <FaTimes
              color="white"
              size={30}
              className="times"
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            />
          </ModalLogo>
          <Text>
            <Link
              className="link"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            >
              <TextModal>About</TextModal>
            </Link>
            <Link
              className="link"
              to="feature"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            >
              <TextModal>Features</TextModal>
            </Link>
            <Link
              className="link"
              to="product"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            >
              <TextModal>Products</TextModal>
            </Link>
            <Link
              className="link"
              to="team"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            >
              <TextModal>Team</TextModal>
            </Link>
            <Link
              className="link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => NavbarDispatch("CLOSE_SIDEBAR")}
            >
              <TextModal>Contact</TextModal>
            </Link>
          </Text>
        </BoxContainer>
      </Box>
    </div>
  );
};

export default ModalNavbar;

const Box = styled.div`
  position: fixed;
  right: ${({ display }) => (display ? "0" : "-150%")};
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 100;
  transition: all 0.3s ease;

  & > .times {
    z-index: 101;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${colors.darkGreen};
`;

const ModalLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  margin-top: 30px;
  width: 100%;

  & > .times {
    cursor: pointer;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 100%;
  width: 100%;

  & > .link {
    cursor: pointer;
  }
`;

const TextModal = styled.h3`
  color: ${colors.white};
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 4px white;
  }
`;
