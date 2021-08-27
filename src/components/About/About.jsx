import aboutus from "../../assets/aboutus.png";
import * as S from "./About-style";

const About = () => {
  return (
    <S.AboutSection id="about">
      <S.AboutContainer>
        <S.AboutTextContainer>
          <h3>About Us</h3>
          <h6>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, unde.
            Quaerat, hic error! Aspernatur fuga illo magnam expedita optio
            culpa?
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            sequi recusandae facere explicabo laudantium numquam tenetur dolor
            eligendi doloremque, asperiores labore corporis quasi facilis
            aliquam sapiente sed est ut nostrum ipsam. Asperiores perferendis
            non necessitatibus cum ullam temporibus quos dolores? Porro,
            consectetur omnis reiciendis repellendus libero quo ab sunt animi.
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
