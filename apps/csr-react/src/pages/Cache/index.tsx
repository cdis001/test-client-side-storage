import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CheckVolumDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  & > div {
    margin: 10px;
  }
`;

const Cache = () => {
  return (
    <section>
      <h1>Cache</h1>
      <Link to="/cache/todos">Todos</Link>
      <Link to="/cache/login">Login</Link>
      <Link to="/">Back to main</Link>
    </section>
  );
};

export default Cache;
