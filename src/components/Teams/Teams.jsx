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
              Your ability to discipline yourself to set clear goals, and then
              to work toward them every day, will do more to guarantee your
              success than any other single factor.
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
            <p>
              “The price of success is hard work, dedication to the job at hand,
              and the determination that whether we win or lose, we have applied
              the best of ourselves to the task at hand.
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
                      "https://www.linkedin.com/in/naufal-afaf-b49bb7153/"
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
              If you don’t pay appropriate attention to what has your attention,
              it will take more of your attention than it deserves.
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
