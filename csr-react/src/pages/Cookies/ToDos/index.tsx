import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { memoTypes } from "../../../types/memo";
import {
  getCookie,
  setCookie,
  deleteCookie,
  clearCookies,
} from "../../../api/cookie";
import { getCookieMemo, createMemo, deleteMemo } from "../../../api/memo";

const MemoInputForm = styled.form`
  width: 350px;
  border: 1px solid #918e8f;
  border-radius: 4px;
  & > input {
    box-sizing: border-box;
    width: 80%;
    height: 30px;
    border-radius: 0;
    border: none;
  }

  & > input:focus {
    outline: none;
    border: 1px solid #949494;
  }

  & > button {
    width: 20%;
    height: 30px;
    background-color: #ef709d;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    font-size: 14px;
  }
`;

const MemoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > div {
    width: 350px;
    padding: 10px 0;
    border-bottom: 1px solid #918e8f;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  & > div > button {
    border: none;
    background-color: inherit;
    cursor: pointer;
    padding: 5px;
    position: absolute;
    right: 0;
  }

  & > div > label {
    display: flex;
    align-self: center;
    width: 320px;
    overflow: scroll;
    white-space: nowarp;
  }

  & > div > label::-webkit-scrollbar {
    display: none;
  }
`;

const LogoutBtn = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  color: #ef709d;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 700;
`;

const CookiesToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<memoTypes[]>([]);

  const navigate = useNavigate();

  const getMemo = async () => {
    const { data, status } = await getCookieMemo();
    // console.log(data);

    if (status === 200) {
      setMemo(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, status } = await createMemo({ contents: text });
    console.log(status);
    console.log(data);
    if (status === 201) {
      const newMemo = [...memo, { contents: text }];
      setMemo(newMemo);
      setText("");
    }
  };

  const deleteMemoBtn = async (id: number, idx: number) => {
    const { data, status } = await deleteMemo(id);
    // console.log(status);
    // console.log(data);
    if (status === 200) {
      let newMemo = [...memo];
      newMemo.splice(idx, 1);
      setMemo(newMemo);
    }
  };

  const logout = () => {
    deleteCookie("token");
    deleteCookie("userId");
    navigate("/cookies/login");
  };

  useEffect(() => {
    const token = getCookie("token");

    if (!!!token) {
      navigate("/cookies/login");
    }

    getMemo();
  }, []);

  return (
    <section>
      <h1>Cookies</h1>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <MemoInputForm onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
        />
        <button type="submit">등록</button>
      </MemoInputForm>
      <MemoBox>
        {memo.map((data, idx) => (
          <div key={data.id}>
            <label>{data.contents}</label>
            <button onClick={() => deleteMemoBtn(data.id, idx)}>🗑</button>
          </div>
        ))}
      </MemoBox>
    </section>
  );
};

export default CookiesToDos;
