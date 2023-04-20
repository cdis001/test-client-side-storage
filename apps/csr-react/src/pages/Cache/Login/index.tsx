import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { login } from "@test/api";
import { InputBox, Button, ButtonList, AuthBox } from "@test/lib";

const CachesLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginBtn = async () => {
    const { data, status } = await login({ username, password });
    if (status === 201) {
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("userId", data.user_id);
      navigate("/cache/todos");
    } else {
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!!token) {
      navigate("/cache/todos");
    }
  }, []);

  return (
    <section>
      <h1>CHCHE API LOGIN</h1>
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
            <Link to="/cookies">뒤로가기</Link>
          </li>
        </ButtonList>
      </AuthBox>
    </section>
  );
};

export default CachesLogin;
