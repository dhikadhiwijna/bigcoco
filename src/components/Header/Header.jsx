import React from "react";
import jumbotron from "../../assets/jumbotron.png";
import abid from "../../assets/abid.jpg";
import * as S from "./Header-style";

const Header = () => {
  return (
    <S.HeaderSection>
      <img src={jumbotron} alt="jumbotron" />
      <S.HeaderTitle>
        <S.QuoteDiv>
          <img src={abid} alt="abidlul" />
          <h5>
            "Sometimes coconut is taken in our toilet, ez" -Abid Robbani, CEO
          </h5>
        </S.QuoteDiv>

        <h1>We have better coconut than Universal Coco</h1>

        <S.ButtonJumbotron>Learn More</S.ButtonJumbotron>
      </S.HeaderTitle>
    </S.HeaderSection>
  );
};

export default Header;
