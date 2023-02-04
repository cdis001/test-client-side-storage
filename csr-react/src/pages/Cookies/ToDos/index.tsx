import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const CookiesToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMemo = [...memo, text];
    setMemo(newMemo);
    setText("");
    setMemoCookie(newMemo);
  };

  const deleteMemo = (idx: number) => {
    let newMemo = [...memo];
    newMemo.splice(idx, 1);
    setMemo(newMemo);
    setMemoCookie(newMemo);
  };

  const setMemoCookie = (newMemo: string[]) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 3);
    var cookie_value = newMemo + "; expires=" + exdate.toUTCString();
    document.cookie = `memo=${cookie_value}`;
  };

  const showStorageEstimate = async () => {
    if (navigator.storage && navigator.storage.estimate) {
      const quota = await navigator.storage.estimate();
      // quota.usage -> 사용 중인 용량(byte)
      // quota.quota -> 사용할 수 있는 전체 용량(byte)
      const percentageUsed = (quota.usage / quota.quota) * 100;
      console.log(
        `사용할 수 있는 용량의 ${percentageUsed}%를 사용하고 있습니다.`
      );
      const remaining = quota.quota - quota.usage;
      console.log(`앞으로 ${remaining} 바이트를 더 사용할 수 있습니다.`);
    }
  };

  useEffect(() => {
    if (!!document.cookie) {
      let cookieMemo = document.cookie.split("memo=")[1].split(",");
      cookieMemo[0].length === 0
        ? null
        : setMemo(document.cookie.split("memo=")[1].split(","));
    }
    showStorageEstimate();
  }, []);

  return (
    <section>
      <h1>Cookies</h1>
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
          <div key={idx}>
            <label>{data}</label>
            <button onClick={() => deleteMemo(idx)}>🗑</button>
          </div>
        ))}
      </MemoBox>
    </section>
  );
};

export default CookiesToDos;
