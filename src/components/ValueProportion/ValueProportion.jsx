import React from "react";
import { FaHandHolding } from "react-icons/fa";
import * as S from "./ValueProportion-style";
import quality from "../../assets/quality.png";
import integrity from "../../assets/integrity.png";
import community from "../../assets/community.png";
import commitment from "../../assets/comitment.png";

const ValueProportion = () => {
  return (
    <S.ValueSection id="feature">
      <S.ValueContainer>
        <S.ValueHeader>
          <h3>Our Key Features</h3>
        </S.ValueHeader>
        <S.Value>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={integrity} alt="integrity" />
            </S.LogoContainer>

            <h4>Integrity</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              ab illo rem adipisci? Voluptatem ipsam ex magnam corporis aut?
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={quality} alt="quality" />
            </S.LogoContainer>
            <h4>Quality</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              ab illo rem adipisci? Voluptatem ipsam ex magnam corporis aut?
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={commitment} alt="commitment" />
            </S.LogoContainer>
            <h4>Commitment</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              ab illo rem adipisci? Voluptatem ipsam ex magnam corporis aut?
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={community} alt="community" />
            </S.LogoContainer>
            <h4>Community</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos esse
              ab illo rem adipisci? Voluptatem ipsam ex magnam corporis aut?
            </p>
          </S.ValueCard>
        </S.Value>
      </S.ValueContainer>
    </S.ValueSection>
  );
};

export default ValueProportion;
