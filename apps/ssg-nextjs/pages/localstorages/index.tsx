import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { RouteList } from "@test/lib";

const LocalStorages = () => {
  return (
    <section>
      <h1>LocalStorages</h1>
      <RouteList>
        <li>
          <Link href="/localstorages/localstoragesTodos">
            LocalStorages Todos
          </Link>
        </li>
        <li>
          <Link href="/">Back to main</Link>
        </li>
      </RouteList>
    </section>
  );
};

export default LocalStorages;
