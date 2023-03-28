import React, { ReactNode } from "react";
import styled from "styled-components";

const RouteListStyle = styled.ul`
  display: flex;
  flex-direction: column;

  & > li {
    margin: 2px;
  }
`;

interface RouteListProps {
  children?: ReactNode;
}

export const RouteList = ({ children }: RouteListProps) => {
  return <RouteListStyle>{children}</RouteListStyle>;
};
