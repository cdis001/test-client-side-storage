import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { RouteList } from "@test/lib";

const SessionStorages = () => {
  return (
    <section>
      <h1>SessionStorages</h1>
      <RouteList>
        <li>
          <Link href="/sessionstorages/todos">Todos</Link>
        </li>
        <li>
          <Link href="/sessionstorages/login">Login</Link>
        </li>
        <li>
          <Link href="/sessionstorages/sessionstoragesTodos">
            Session Todos
          </Link>
        </li>
        <li>
          <Link href="/">Back to main</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default SessionStorages;
