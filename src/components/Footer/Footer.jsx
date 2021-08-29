import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import * as S from "./Footer-style";

const Footer = () => {
  return (
    <S.FooterSection>
      <S.FooterContainer>
        <S.FooterTitle>
          <h4>Questions?</h4>
          {/* <p>Let's Get In Touch</p> */}
        </S.FooterTitle>

        <S.MainFooter>
          <S.LeftContainer>
            <h5>Big Coco Indonesia</h5>
            <h5>PT. Gabah Dunak</h5>
            <p>
              We also continue to update the information about the company
              through social media, for the latest information you can follow
              our social media.
            </p>
            <br />
            {/* <p>Email: email@bigcoco.com</p> */}
            <p> WhatsApp: +62 811 121 8181 (Fast Respond)</p>
          </S.LeftContainer>
          <S.SocialMedia>
            <h5>Social Media:</h5>
            <div>
              <FaFacebook size={30} />
              <FaInstagram size={30} />
              <FaLinkedin size={30} />
            </div>
          </S.SocialMedia>
        </S.MainFooter>
      </S.FooterContainer>
    </S.FooterSection>
  );
};

export default Footer;
