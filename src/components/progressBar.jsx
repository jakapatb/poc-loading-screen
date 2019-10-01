import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Content = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  opacity: 0.5;
  justify-content: center;
  align-items: center;
`;
const ProgressBlock = styled.div`
  margin: 16px;
  border-radius: 16px;
  border: 4px solid #000;
  width: 100%;
  min-height: 68px;
  display: flex;
  padding: 2px 4px;
  gap: 16px;
  align-items: center;
`;
const Block = styled.div`
  background: #000;
  width: 19%;
  border: 2px solid #fff;
  height: 64px;
  border-radius: 8px;
`;
export const Progress = () => {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent(percent => (percent === 5 ? 0 : percent + 1));
    }, 400);
    return () => clearInterval(timer);
  }, []);
  return (
    <Content>
      <ProgressBlock>
        {[...Array(percent)].map(() => (
          <Block />
        ))}
      </ProgressBlock>
    </Content>
  );
};
