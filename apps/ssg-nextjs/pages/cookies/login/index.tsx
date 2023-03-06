import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { setCookie, getCookie } from "@test/api";
import { InputBox, Button, ButtonList, AuthBox } from "@test/lib";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginBtn = async () => {
    router.push("/cookies/todos");
  };

  return (
    <section>
      <h1>COOKIE LOGIN</h1>
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
            <Link href="/cookies">뒤로가기</Link>
          </li>
        </ButtonList>
      </AuthBox>
    </section>
  );
};

export default Login;
