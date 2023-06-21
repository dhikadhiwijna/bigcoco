import React from "react";
import * as S from "./Header-style";
import coconutvideo from "../../assets/Video/coconut.webm";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <S.HeaderSection>
      {/* <img src={jumbotron} alt="jumbotron" /> */}
      <video className="videoTag" autoPlay loop muted>
        <source src={coconutvideo} type="video/webm" />
      </video>
      <S.HeaderTitle>
        <S.QuoteDiv>
          <h4>
            Best, guaranteed, and trustworthy coconut supplier from Indonesia
          </h4>
        </S.QuoteDiv>

        <h1>Supplying coconut products from the Heart of South East Asia</h1>

        <S.ButtonJumbotron>
          <FaChevronDown style={{ marginRight: "10px" }} />

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
