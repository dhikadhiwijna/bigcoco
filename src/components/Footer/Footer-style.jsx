import styled from "styled-components";
import { colors, StyledContainer } from "../../style";

export const FooterSection = styled.section`
  background-color: ${colors.darkGreen};
  padding: 50px 0;
`;

export const FooterContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.div`
  text-align: center;

  & > h4 {
    color: white;
  }

  & > p {
    color: white;
    margin-top: 20px;
  }
`;

export const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 50px;
  align-items: flex-start;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }
`;

export const LeftContainer = styled.div`
  max-width: 500px;

  & > h5 {
    color: ${colors.white};
    padding-bottom: 30px;
  }

  & > p {
    color: ${colors.white};
  }
`;

export const SocialMedia = styled.div`
  & > h5 {
    color: ${colors.white};
    padding-bottom: 30px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 800px) {
    padding-top: 30px;
  }
`;
