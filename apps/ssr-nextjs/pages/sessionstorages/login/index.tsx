import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { login } from "@test/api";
import { InputBox, Button, ButtonList, AuthBox } from "@test/lib";

const SessionStoragesLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const loginBtn = async () => {
    const { data, status } = await login({ username, password });
    if (status === 201) {
      sessionStorage.setItem("token", data.access_token);
      sessionStorage.setItem("userId", data.user_id);
      router.push("/sessionstorages/todos");
    } else {
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!!token) {
      router.push("/sessionstorages/todos");
    }
  }, []);

  return (
    <section>
      <h1>SESSION STORAGE LOGIN</h1>
      <AuthBox>
        <InputBox placeholder={"id"} value={username} setValue={setUsername} />
        <InputBox
          placeholder={"password"}
          type={"password"}
          value={password}
          setValue={setPassword}
        />
        <Button title={"로그인"} onClick={loginBtn} />
        <ButtonList>
          <li>
            <Link href="/sessionstorages">뒤로가기</Link>
          </li>
        </ButtonList>
      </AuthBox>
    </section>
  );
};

export default SessionStoragesLogin;
