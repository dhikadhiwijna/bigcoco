import React from "react";
import abid from "../../assets/Team/abid.jpg";
import apap from "../../assets/Team/apap.jpg";
import dhika from "../../assets/Team/dhika.jpg";
import * as S from "./Teams-style";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { colors } from "../../style";

const Teams = () => {
  return (
    <S.TeamSection id="team">
      <S.TeamContainer>
        <h3>Our Team</h3>

        <S.TeamCard>
          <S.Card>
            <S.ImageContainer>
              <img src={abid} alt="abid" />
            </S.ImageContainer>
            <h5>Abid Robbani</h5>
            <h6>Founder</h6>
            <p>
              Kesuksesan seseorang selalu berawal dari mimpi. Jika begitu
              adanya, marilah kita tidur.{" "}
            </p>
            <S.SocialMedia>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaInstagram
                  size={20}
                  onClick={() => {
                    window.open("https://www.instagram.com/abidrobbani/");
                  }}
                />
              </div>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin
                  size={20}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/abid-robbani-523b9321a/"
                    );
                  }}
                />
              </div>
            </S.SocialMedia>
          </S.Card>
          <S.Card>
            <S.ImageContainer>
              <img src={apap} alt="apap" />
            </S.ImageContainer>
            <h5>Naufal Afaf</h5>
            <h6>Co-Founder</h6>
            <p>Manusia boleh berencana, tapi saldo juga yang menentukan.</p>
            <S.SocialMedia>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaInstagram
                  size={20}
                  onClick={() => {
                    window.open("https://www.instagram.com/naufalafaf/");
                  }}
                />
              </div>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin
                  size={20}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/abid-robbani-523b9321a/"
                    );
                  }}
                />
              </div>
            </S.SocialMedia>
          </S.Card>
          <S.Card>
            <S.ImageContainer>
              <img src={dhika} alt="dhika" />
            </S.ImageContainer>
            <h5>Adhika Adhiwijna</h5>
            <h6>Business Development</h6>
            <p>
              Pekerjaan seberat apapun akan lebih terasa ringan jika kita tidak
              mengerjakannya.
            </p>
            <S.SocialMedia>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaInstagram
                  size={20}
                  onClick={() => {
                    window.open("https://www.instagram.com/dhikadhiwijna/");
                  }}
                />
              </div>
              <div
                style={{
                  color: colors.darkGreen,
                  margin: "0 10px",
                  cursor: "pointer",
                }}
              >
                <FaLinkedin
                  size={20}
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/adhika-adhiwijna-060296/"
                    );
                  }}
                />
              </div>
            </S.SocialMedia>
          </S.Card>
        </S.TeamCard>
      </S.TeamContainer>
    </S.TeamSection>
  );
};

export default Teams;
