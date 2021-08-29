import styled from "styled-components";
import { StyledContainer } from "../../style";

export const AboutSection = styled(StyledContainer)`
  padding: 100px 0;
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const AboutTextContainer = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  margin-right: 100px;

  @media (max-width: 1080px) {
    height: 300px;
    margin-bottom: 20px;
    margin-right: unset;
  }

  @media (max-width: 768px) {
    height: 400px;
    margin-bottom: 100px;
    padding: 0 50px;
  }

  & > p {
    color: black;
  }
`;

export const LogoContainer = styled.div`
  max-width: 600px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    max-width: 90%;
    min-width: 200px;
    border-radius: 30px;
  }
`;
