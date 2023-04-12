import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { RouteList } from "@test/lib";

const IndexedDB = () => {
  return (
    <section>
      <h1>IndexedDB</h1>
      <RouteList>
        <li>
          <Link to="/indexedDB/IndexedDBTodos">IndexedDB Todos</Link>
        </li>
        <li>
          <Link to="/">Back to main</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default IndexedDB;
