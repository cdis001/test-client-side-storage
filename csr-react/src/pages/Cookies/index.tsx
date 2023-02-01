import React, { useState } from "react";
import styled from "styled-components";

const MemoInputForm = styled.form`
  width: 100%;
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

const Cookies = () => {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
        <div>
          <label>123</label>
          <button>🗑</button>
        </div>
        <div>
          <label>12345678901234567890123456789012345678901234567890</label>
          <button>🗑</button>
        </div>
      </MemoBox>
    </section>
  );
};

export default Cookies;
