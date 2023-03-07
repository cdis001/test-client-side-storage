import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getCookie, setCookie, deleteCookie, clearCookies } from "@test/api";
import { memoTypes } from "@test/types";

import { setCookiesTodos, getCookiesTodos } from "../../api/cookie";

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

const CookieToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<string[]>([]);
  const [size, setSize] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    const memoList = getCookiesTodos();

    if (!!memoList) {
      setMemo(memoList.split(","));
    }
  }, []);

  const addCookieMemo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMemo = [text, ...memo];
    setMemo(newMemo);
    setCookiesTodos(newMemo);
    setText("");
  };

  const deleteCookieMemo = (idx: number) => {
    let newMemo = [...memo];
    newMemo.splice(idx, 1);
    setMemo(newMemo);
    setCookiesTodos(newMemo);
  };

  return (
    <section>
      <h1>Cookie ToDos</h1>
      <MemoInputForm onSubmit={addCookieMemo}>
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
          <div key={idx}>
            <label>{data}</label>
            <button
              onClick={() => {
                deleteCookieMemo(idx);
              }}
            >
              🗑
            </button>
          </div>
        ))}
      </MemoBox>
    </section>
  );
};

export default CookieToDos;
