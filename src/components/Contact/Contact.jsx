import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import contact from "../../assets/pngegg.png";
import * as S from "./Contact-style";
// import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // const onSubmit = (e) => {

  //   e.preventDefault();
  //   setName("");
  //   setEmail("");
  //   setSubject("");
  //   setMessage("");
  //   alert("Input Succesful");
  // };

  return (
    <S.Background id="contact">
      <S.ContactSection>
        <S.ContactContainer>
          <h3>Contact Us!</h3>

          <p>
            Please feel free to contact us if you need any further information.
            We have full specs information for all the products. We look forward
            to a successful working relationship in the future with you.
          </p>

          <form
            target="_blank"
            action="https://formsubmit.co/adiwijna@gmail.com"
            method="POST"
            // onSubmit={(e) => onSubmit(e)}
          >
            <div>
              <S.InputNameEmail>
                <S.labelInputName>
                  <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    name="name"
                    className="form-control"
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
                    name="email"
                    className="form-control"
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
                  type="text"
                  name="subject"
                  className="form-control"
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
                  name="message"
                  rows="10"
                  className="form-control"
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
