import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getCookie, setCookie, deleteCookie, clearCookies } from "@test/api";

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

const ToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<memoTypes[]>([]);
  const [size, setSize] = useState<number>(0);

  const router = useRouter();

  const logout = () => {
    router.push("/cookies/login");
  };

  return (
    <section>
      <h1>Cookies</h1>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <MemoInputForm>
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
            <button onClick={() => {}}>🗑</button>
          </div>
        ))}
      </MemoBox>
    </section>
  );
};

export default ToDos;
