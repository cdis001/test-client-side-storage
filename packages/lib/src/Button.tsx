import React, { MouseEventHandler } from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  margin-top: 20px;
  height: 40px;
  border: none;
  border-radius: 4px;
  background-color: #ef709d;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.4px;
  cursor: pointer;
`;

interface ButtonProps {
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ title, onClick }) => {
  return <ButtonStyle onClick={onClick}>{title}</ButtonStyle>;
};
