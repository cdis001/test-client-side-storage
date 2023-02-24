import React from "react";
// import type { FC } from "react";
import styled from "styled-components";

const AuthBtn = styled.button`
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #6667ab;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

type AuthButtonProps = {
  title?: string;
  onClick?: () => void;
  dataTestid?: string;
};

// export const AuthButton: FC<AuthButtonProps> = ({
export const AuthButton = ({ title, onClick, dataTestid }: AuthButtonProps) => {
  return (
    <AuthBtn onClick={onClick} data-testid={dataTestid}>
      {title}
    </AuthBtn>
  );
};
