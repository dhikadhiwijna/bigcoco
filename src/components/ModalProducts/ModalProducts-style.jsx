import styled from "styled-components";

export const ModalSection = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  /* opacity: 0.7; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 102;
`;

export const ModalContainer = styled.div`
  width: 70%;
  max-width: 900px;
  display: flex;
  margin: 200px auto;
  border-radius: 5px;
  background-color: white;

  @media (max-width: 576px) {
    margin: 80px auto;
    width: 100%;
  }
`;

export const ModalTextContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h5 {
    margin-top: 15px;
    margin-bottom: 5px;
  }

  & > p {
    color: black;
  }
`;

export const ModalTimes = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  color: black;

  & > .times {
    cursor: pointer;
  }
`;
