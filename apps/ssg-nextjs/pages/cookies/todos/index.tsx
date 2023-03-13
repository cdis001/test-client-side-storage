import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import {
  getCookie,
  setCookie,
  deleteCookie,
  clearCookies,
  getCookieMemo,
  createMemo,
  deleteMemo,
} from "@test/api";
import { memoTypes } from "@test/types";

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

  const token = getCookie("token");

  const logout = () => {
    router.push("/cookies/login");
  };

  const getMemo = async () => {
    var start = new Date();
    const { data, status } = await getCookieMemo(token);

    if (status === 200) {
      setMemo(data);
    }
    var end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("getMemo time:", time);
  };

  const onCreateMemo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const start = new Date();
    const { data, status } = await createMemo({ contents: text }, token);
    if (status === 201) {
      const newMemo = [...memo, { id: data.id, contents: data.contents }];
      setMemo(newMemo);
      setText("");
    }
    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("onCreateMemo time:", time);
  };

  const onDeleteMemo = async (id: number, idx: number) => {
    const start = new Date();
    const { data, status } = await deleteMemo(id, token);
    if (status === 200) {
      let newMemo = [...memo];
      newMemo.splice(idx, 1);
      setMemo(newMemo);
    }
    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("onDeleteMemo time:", time);
  };

  useEffect(() => {
    if (!!!token) {
      router.push("/cookies/login");
    } else {
      getMemo();
    }
  }, []);

  return (
    <section>
      <h1>Cookies</h1>
      <LogoutBtn onClick={logout}>로그아웃</LogoutBtn>
      <MemoInputForm onSubmit={onCreateMemo} type="submit">
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
            <button
              onClick={() => {
                onDeleteMemo(data.id, idx);
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

export default ToDos;
