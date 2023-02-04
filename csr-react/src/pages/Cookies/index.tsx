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

const Cookies = () => {
  return (
    <section>
      <h1>Cookies</h1>
      <Link to="/cookies/todos">Todos</Link>
      <Link to="/cookies/login">Login</Link>
      <Link to="/">Back to main</Link>
    </section>
  );
};

export default Cookies;
