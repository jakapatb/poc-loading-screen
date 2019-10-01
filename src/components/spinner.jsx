import React from "react";
import styled, { keyframes } from "styled-components";
import spinnerIcon from "../images/spinner.png";
const Content = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const SpinnerIcon = styled.img`
  transform: rotate(180deg);
  animation: ${rotate} 2s linear infinite;
`;

export const Spinner = () => {
  return (
    <Content>
      <SpinnerIcon src={spinnerIcon} />
    </Content>
  );
};
