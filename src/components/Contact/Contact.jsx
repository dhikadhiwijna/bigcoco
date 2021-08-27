import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import contact from "../../assets/contact.svg";
import * as S from "./Contact-style";

const Contact = () => {
  return (
    <S.Background id="contact">
      <S.ContactSection>
        <S.ContactContainer>
          <h3>Contact Us!</h3>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ab
            itaque quo blanditiis nostrum amet repudiandae quam commodi
            voluptatem? Adipisci?
          </p>

          <form>
            <div>
              <S.InputNameEmail>
                <S.labelInputName>
                  <input placeholder="Name" />
                  <div />
                </S.labelInputName>
                <S.labelInputEmail>
                  <input placeholder="Email" type="email" />
                  <div />
                </S.labelInputEmail>
              </S.InputNameEmail>
              <S.CustomInput>
                <input placeholder="Subject" />
                <div />
              </S.CustomInput>
              <S.CustomInput>
                <textarea
                  placeholder="Message"
                  style={{ height: "150px", resize: "none" }}
                />
                <div />
              </S.CustomInput>
            </div>
            <S.Action>
              <S.ButtonJumbotron>Send Message!</S.ButtonJumbotron>
              <S.ButtonJumbotron>
                Contact via <FaWhatsapp />
              </S.ButtonJumbotron>
            </S.Action>
          </form>
        </S.ContactContainer>
        <S.LogoContainer>
          <img src={contact} alt="contact" />
        </S.LogoContainer>
      </S.ContactSection>
    </S.Background>
  );
};

export default Contact;
