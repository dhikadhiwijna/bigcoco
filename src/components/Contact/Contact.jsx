import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import contact from "../../assets/pngegg.png";
import * as S from "./Contact-style";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Input Succesful");
    console.log(name, email, subject, message);
  };

  const [border, setBorder] = React.useState(false);

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

          <form onSubmit={onSubmit}>
            <div>
              <S.InputNameEmail>
                <S.labelInputName>
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    required
                  />
                  <div />
                </S.labelInputName>
                <S.labelInputEmail>
                  <input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div />
                </S.labelInputEmail>
              </S.InputNameEmail>
              <S.CustomInput>
                <input
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <div />
              </S.CustomInput>
              <S.CustomInput>
                <textarea
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{ height: "150px", resize: "none" }}
                  required
                />
                <div />
              </S.CustomInput>
            </div>
            <S.Action>
              <S.ButtonInput
                type="submit"
                value="Send Message!"
              ></S.ButtonInput>
              <S.ButtonJumbotron
                onClick={() => {
                  window.open("https://wa.me/6287780035272");
                }}
              >
                Contact via <FaWhatsapp size={20} />
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
