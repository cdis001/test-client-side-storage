import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { login } from "../../../api/login";
import { setCookie, getCookie } from "@test/api";

import InputBox from "../../../components/InputBox";
import Button from "../../../components/Button";
import ButtonList from "../../../components/ButtonList";
import AuthBox from "../../../components/AuthBox";

const CookiesLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginBtn = async () => {
    const { data, status } = await login({ username, password });
    if (status === 201) {
      const exdate = new Date();
      exdate.setDate(exdate.getDate() + 3);
      setCookie("token", data.access_token, exdate);
      setCookie("userId", data.user_id, exdate);

      navigate("/cookies/todos");
    } else {
      alert("로그인 실패");
    }
  };

  useEffect(() => {
    const token = getCookie("token");

    if (!!token) {
      navigate("/cookies/todos");
    }
  }, []);

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
            <Link to="/cookies">뒤로가기</Link>
          </li>
        </ButtonList>
      </AuthBox>
    </section>
  );
};

export default CookiesLogin;
