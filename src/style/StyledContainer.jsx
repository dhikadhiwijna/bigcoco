import styled from "styled-components";

export const StyledContainer = styled.div`
  margin: 0 auto;
  width: 85vw;

  @media (min-width: 1600px) and (max-height: 1080px) {
    width: 85vw;
  }

  @media (max-width: 1200px) {
    width: 85vw;
  }

  @media (max-width: 990px) {
    width: 90vw;
  }

  @media (max-width: 576px) {
    width: 95vw;
  }
`;

export default StyledContainer;
