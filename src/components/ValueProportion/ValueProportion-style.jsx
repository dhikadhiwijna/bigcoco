import styled from "styled-components";
import { colors, StyledContainer } from "../../style";

export const ValueSection = styled.div`
  background-color: ${colors.white};
  padding-bottom: 50px;
`;

export const ValueContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ValueHeader = styled.div`
  margin: 30px 0;
`;

export const Value = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: red; */

  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ValueCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 20px;
  min-height: 300px;
  max-width: 300px;

  & > p {
    color: ${colors.black};
  }
`;

export const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-radius: 50%;
  border: 1px solid ${colors.darkGreen}; */
  background-color: ${colors.white};

  & > img {
    width: 50px;
    height: auto;
  }
`;