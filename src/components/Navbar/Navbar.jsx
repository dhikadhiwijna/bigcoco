import React, { useState, useEffect, useContext } from "react";
import * as S from "./Navbar-style";
import bigcoco from "../../assets/bigcoco1.png";
import { Link, animateScroll as Scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Modal from "react-modal";
import ModalNavbar from "../ModalNavbar/ModalNavbar";
import { ContextStore } from "../../Context/ContextStore";

Modal.setAppElement(document.getElementById("root"));

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const { NavbarState, NavbarDispatch } = useContext(ContextStore);

  useEffect(() => {
    const scrollNav = () => {
      const navbarHeight = 100;
      window.pageYOffset > navbarHeight ? setShadow(true) : setShadow(false);
    };

    window.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  return (
    <div>
      <ModalNavbar display={NavbarState} />

      <S.NavbarSection shadow={shadow}>
        <S.NavbarContainer shadow={shadow}>
          <S.Logo onClick={() => Scroll.scrollToTop()}>
            <img src={bigcoco} alt="bigcocologo" />
            <h4>Big Coco Indonesia</h4>
          </S.Logo>
          <S.ListItems>
            <S.NavItem>
              <Link
                className="link"
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                About
              </Link>
              <div />
            </S.NavItem>
            <S.NavItem>
              <Link
                className="link"
                to="feature"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Features
              </Link>
              <div />
            </S.NavItem>
            <S.NavItem>
              <Link
                className="link"
                to="product"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Product
              </Link>
              <div />
            </S.NavItem>
            <S.NavItem>
              <Link
                className="link"
                to="team"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Team
              </Link>
              <div />
            </S.NavItem>
            <S.NavItem>
              <Link
                className="link"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Contact
              </Link>
              <div />
            </S.NavItem>
          </S.ListItems>
          <S.SlideContainer onClick={() => NavbarDispatch("OPEN_SIDEBAR")}>
            <FaBars size={25} />
          </S.SlideContainer>
        </S.NavbarContainer>
      </S.NavbarSection>
    </div>
  );
};

export default Navbar;
