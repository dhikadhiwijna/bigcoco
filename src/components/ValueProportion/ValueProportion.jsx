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
              The basis of our work attitude is in accordance with our words and
              actions with a high commitment to maintaining the trust of all our
              stakeholders
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={quality} alt="quality" />
            </S.LogoContainer>
            <h4>Quality</h4>
            <p>
              We build and maintain the best quality with the designs that we
              designed from the beginning. This coconut product is grown,
              treated, and processed with the best innovations that we provide
              until it reaches the hands of every customer.
            </p>
          </S.ValueCard>
          <S.ValueCard>
            <S.LogoContainer>
              <img src={commitment} alt="commitment" />
            </S.LogoContainer>
            <h4>Commitment</h4>
            <p>
              We establish and consistently maintain good cooperative
              relationships with all stakeholders: customers, government,
              investors in order to create a healthy, reliable, trustworthy and
              generous company that continues to grow and develop.
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
