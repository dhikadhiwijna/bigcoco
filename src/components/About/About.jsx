import aboutus from "../../assets/coconutabout.jpg";
import * as S from "./About-style";

const About = () => {
  return (
    <S.AboutSection id="about">
      <S.AboutContainer>
        <S.AboutTextContainer>
          <h3>About Us</h3>
          <h6>
            We are an Indonesian company engaged in plantation and we also
            supply raw materials from coconut which will be in production some
            processed products.
          </h6>
          <p>
            Our company's main activities start from processing more than
            thousand hectares of coconut plantations in Indonesia, including
            plasma land; harvesting and processing fresh fruit bunches into
            coconut oil and coconut kernels, to processing them into a variety
            of industrial and consumer products such as coconut peat blocks,
            coir fiber, virgin coconut oil, coconut briquette and trading of
            coconut-based products throughout the world.
          </p>
        </S.AboutTextContainer>
        <S.LogoContainer>
          <img src={aboutus} alt="about us" />
        </S.LogoContainer>
      </S.AboutContainer>
    </S.AboutSection>
  );
};

export default About;
