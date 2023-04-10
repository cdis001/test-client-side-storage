import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteList } from "@test/lib";

const LocalStorages = () => {
  return (
    <section>
      <h1>LocalStorages</h1>
      <RouteList>
        <li>
          <Link to="/localstorages/localstoragesTodos">Local Todos</Link>
        </li>
        <li>
          <Link to="/">Back to main</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default LocalStorages;
