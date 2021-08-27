import React from "react";
import { FaCopyright } from "react-icons/fa";
import styled from "styled-components";
import { colors } from "../../style";

const Copyright = () => {
  return (
    <TextCopyright>
      <p>
        <FaCopyright /> 2021 Big Coco Indonesia. All rights reserved.
      </p>
    </TextCopyright>
  );
};

export default Copyright;

const TextCopyright = styled.div`
  background-color: ${colors.lightGreen};
  text-align: center;

  & > p {
    color: ${colors.darkGreen};
  }
`;
