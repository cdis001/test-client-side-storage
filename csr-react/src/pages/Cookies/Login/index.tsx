import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import InputBox from "../../../components/InputBox";
import Button from "../../../components/Button";
import ButtonList from "../../../components/ButtonList";
import AuthBox from "../../../components/AuthBox";

type LoginDatas = {
  userId: string;
  password: string;
};

const CookiesLogin = () => {
  return (
    <section>
      <h1>COOKIE LOGIN</h1>
      <AuthBox>
        <InputBox placeholder={"id"} />
        <InputBox placeholder={"password"} type={"password"} />
        <Button title={"로그인"} />
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
