import React from "react";
import abid from "../../assets/abid.jpg";
import * as S from "./Header-style";
import coconutvideo from "../../assets/Video/coconut.mp4";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <S.HeaderSection>
      {/* <img src={jumbotron} alt="jumbotron" /> */}
      <video className="videoTag" autoPlay loop muted>
        <source src={coconutvideo} type="video/mp4" />
      </video>
      <S.HeaderTitle>
        <S.QuoteDiv>
          <img src={abid} alt="abidlul" />
          <h5>
            "Sometimes coconut is taken in our toilet, ez" -Abid Robbani, CEO
          </h5>
        </S.QuoteDiv>

        <h1>We have better coconut than Universal Coco</h1>

        <S.ButtonJumbotron>
          <FaChevronDown style={{ marginRight: "10px" }} />
          Scroll Down
        </S.ButtonJumbotron>
      </S.HeaderTitle>
    </S.HeaderSection>
  );
};

export default Header;
