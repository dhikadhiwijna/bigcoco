import React from "react";
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
              Integrity means telling the truth, keeping our word and treating
              others with fairness and respect. Integrity is one of our most
              cherished assets. It must not be compromised.
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={quality} alt="quality" />
            </S.LogoContainer>
            <h4>Quality</h4>
            <p>
              Quality is exhibited in many ways by selling and supporting
              products and services that delight customers, establishing a work
              environment , delivering financial results that meet investor
              expectations.
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={commitment} alt="commitment" />
            </S.LogoContainer>
            <h4>Commitment</h4>
            <p>
              Commitment is important where we will continue to provide the best
              to our customers and investors all the time. Our opportunity to
              serve should be viewed as a privilege that is not to be taken for
              granted.
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={community} alt="community" />
            </S.LogoContainer>
            <h4>Community</h4>
            <p>
              Community involvement can allow people to know our brand, product,
              or sell better, and helps us create a realiable, trustworthy, and
              generous business image.
            </p>
          </S.ValueCard>
        </S.Value>
      </S.ValueContainer>
    </S.ValueSection>
  );
};

export default ValueProportion;
