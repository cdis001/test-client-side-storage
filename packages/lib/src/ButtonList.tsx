import React, { ReactNode } from "react";
import styled from "styled-components";

const ButtonListStyle = styled.ul`
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
`;

interface ButtonListProps {
  children?: ReactNode;
}

export const ButtonList = ({ children }: AuthButtonListProps) => {
  return <ButtonListStyle>{children}</ButtonListStyle>;
};
