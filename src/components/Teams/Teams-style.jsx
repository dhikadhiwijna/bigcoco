import styled from "styled-components";
import { StyledContainer, colors } from "../../style";

export const TeamSection = styled(StyledContainer)`
  padding-bottom: 100px;
`;

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  & > h3 {
    margin: 50px 0;
  }
  /* background-color: red; */
`;

export const TeamCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  margin: 20px 0;

  & > h5 {
    margin: 20px 0;
  }
  & > h6 {
    margin: 20px 0;
    color: ${colors.darkGreen};
  }
  & > p {
    font-weight: 300;
    color: black;
    max-width: 400px;
    height: 60px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  & > img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding-top: 20px;
  margin-top: 30px;
`;
