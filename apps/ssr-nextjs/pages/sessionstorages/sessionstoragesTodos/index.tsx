import React, { useState, useEffect } from "react";
import styled from "styled-components";
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

const OnlySessionStoragesToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<string[]>([]);
  const [size, setSize] = useState<number>(0);

  useEffect(() => {
    const start = new Date();
    const memoList = sessionStorage.getItem("memo") || "";

    if (!!memoList) {
      setMemo([...JSON.parse(memoList)]);
    }
    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("getMemo time:", time);
  }, []);

  const addSessionMemo = (e: React.FormEvent<HTMLFormElement>) => {
    const start = new Date();
    e.preventDefault();
    const newMemo = [text, ...memo];
    setMemo(newMemo);
    sessionStorage.setItem("memo", JSON.stringify(newMemo));
    setText("");
    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("addSessionMemo time:", time);
  };

  const deleteSessionMemo = (idx: number) => {
    const start = new Date();
    let newMemo = [...memo];
    newMemo.splice(idx, 1);
    setMemo(newMemo);
    sessionStorage.setItem("memo", JSON.stringify(newMemo));
    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("deleteSessionMemo time:", time);
  };

  return (
    <section>
      <h1>Session Storage ToDos</h1>
      <MemoInputForm onSubmit={addSessionMemo}>
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
                deleteSessionMemo(idx);
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

export default OnlySessionStoragesToDos;
