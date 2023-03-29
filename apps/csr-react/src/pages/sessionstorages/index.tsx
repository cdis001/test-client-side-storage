import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteList } from "@test/lib";

const SessionStorages = () => {
  return (
    <section>
      <h1>SessionStorages</h1>
      <RouteList>
        <li>
          <Link to="/sessionstorages/todos">Todos</Link>
        </li>
        <li>
          <Link to="/sessionstorages/login">Login</Link>
        </li>
        <li>
          <Link to="/sessionstorages/sessionstoragesTodos">Session Todos</Link>
        </li>
        <li>
          <Link to="/">Back to main</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default SessionStorages;
