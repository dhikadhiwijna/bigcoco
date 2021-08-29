import React from "react";
import abid from "../../assets/abid.jpg";
import * as S from "./Header-style";
import coconutvideo from "../../assets/Video/coconut.mp4";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <S.HeaderSection>
      {/* <img src={jumbotron} alt="jumbotron" /> */}
      <video className="videoTag" autoPlay loop muted>
        <source src={coconutvideo} type="video/mp4" />
      </video>
      <S.HeaderTitle>
        <S.QuoteDiv>
          {/* <img src={abid} alt="abidlul" /> */}
          <h4>
            Best, reliable, and trustworthy coconut supplier from Indonesia
          </h4>
        </S.QuoteDiv>

        <h1>Supplying coconut products in the Heart of South East Asia</h1>

        <S.ButtonJumbotron>
          <FaChevronDown style={{ marginRight: "10px" }} />
          {/* Scroll Down */}
          <Link
            className="link"
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Scroll Down
          </Link>
        </S.ButtonJumbotron>
      </S.HeaderTitle>
    </S.HeaderSection>
  );
};

export default Header;
