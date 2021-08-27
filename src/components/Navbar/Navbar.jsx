import React, { useState, useEffect } from "react";
import * as S from "./Navbar-style";
import bigcoco from "../../assets/bigcoco1.png";
import { Link, animateScroll as Scroll } from "react-scroll";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

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
          {/* <S.NavItem>
            <Link
              className="link"
              to="journey"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Journey
            </Link>
            <div />
          </S.NavItem> */}
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
      </S.NavbarContainer>
    </S.NavbarSection>
  );
};

export default Navbar;
