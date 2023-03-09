import React, { ReactNode } from "react";
import styled from "styled-components";

const AuthBoxStyle = styled.div`
  display: flex;
  padding: 20px;
  width: 460px;
  box-sizing: border-box;
  box-shadow: 10px 10px 30px #e4e4e7;
  border-radius: 4px;
  flex-direction: column;
`;

interface AuthBoxProps {
  children?: ReactNode;
}

export const AuthBox = ({ children }: AuthBoxProps) => {
  return <AuthBoxStyle>{children}</AuthBoxStyle>;
};
