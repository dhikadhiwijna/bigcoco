import styled from "styled-components";
import { StyledContainer, colors } from "../../style";

export const Tes = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 100px;
  background-color: ${colors.yellow};
  & > h3 {
    margin: 50px 0;
  }
`;

export const ProductSection = styled.div`
  margin: 0 auto;
  width: 85vw;

  @media (min-width: 1600px) and (max-height: 1080px) {
    width: 85vw;
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 990px) {
    width: 80vw;
  }

  @media (max-width: 576px) {
    width: 75vw;
  }
`;
