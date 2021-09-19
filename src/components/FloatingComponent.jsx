import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";

const FloatingComponent = () => {
  return (
    <FloatIcon
      onClick={() => {
        window.open("https://wa.me/6287780035272");
      }}
    >
      {/* <contactTitle>Contact Us</contactTitle> */}
      <FaWhatsapp size={40} color="green" />
    </FloatIcon>
  );
};

export default FloatingComponent;

const contactTitle = styled.h5`
  margin-bottom: 10px;
`;

const FloatIcon = styled.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 1000;
  background-color: white;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 600px) {
    display: none;
  }

  &:hover {
    box-shadow: 0 0 10px white;
  }
`;
