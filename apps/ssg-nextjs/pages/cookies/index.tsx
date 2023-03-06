import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import { getCookie, setCookie } from "@test/api";

const Cookies = () => {
  useEffect(() => {
    // const exdate = new Date();
    // exdate.setDate(exdate.getDate() + 3);
  }, []);
  return (
    <section>
      <h1>Cookies</h1>
      <Link href="/cookies/todos">Todos</Link>
      <Link href="/cookies/login">Login</Link>
      <Link href="/">Back to main</Link>
    </section>
  );
};

export default Cookies;
