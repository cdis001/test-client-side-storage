import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

const OnlyIndexedDbToDos = () => {
  const [text, setText] = useState<string>("");
  const [memo, setMemo] = useState<memoTypes[]>([]);
  const [size, setSize] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!window.indexedDB) {
      window.alert(
        "Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available."
      );
    } else {
      getMemo();
    }
  }, []);

  const getMemo = () => {
    const start = new Date();

    let db;
    const request = window.indexedDB.open("memoListDB", 1);

    request.onerror = function (event: any) {
      console.log(event);
    };

    request.onsuccess = function (event: any) {
      db = event.target!.result;

      const transaction = db.transaction(["memoList"], "readonly");
      const objectStore = transaction.objectStore("memoList");

      const request = objectStore.openCursor();

      request.onerror = function (event: any) {
        console.log("Error getting data:", event.target!.errorCode);
      };

      let memoData: memoTypes[] = [];

      request.onsuccess = function (event: any) {
        const cursor = event.target!.result;
        if (cursor) {
          memoData.push({ id: cursor.key, contents: cursor.value });
          cursor.continue();
        } else {
          setMemo(memoData);
          console.log("No more data");
        }
      };
    };

    request.onupgradeneeded = function (event: any) {
      const db = event.target!.result;

      const objectStore = db.createObjectStore("memoList", {
        autoIncrement: true,
      });
    };

    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("getMemo time:", time);
  };

  const addIndexedMemo = (e: React.FormEvent<HTMLFormElement>) => {
    const start = new Date();
    e.preventDefault();

    let db;
    const request = window.indexedDB.open("memoListDB", 1);

    request.onerror = function (event: any) {
      console.log("Error opening database:", event.target!.errorCode);
    };

    request.onsuccess = function (event: any) {
      db = event.target!.result;

      const transaction = db.transaction(["memoList"], "readwrite");
      const objectStore = transaction.objectStore("memoList");

      const addRequest = objectStore.add(text);

      addRequest.onerror = function (event: any) {
        console.log("Error adding data:", event.target!.errorCode);
      };

      addRequest.onsuccess = function (event: any) {
        let newMemo = [...memo];
        newMemo.push({ id: event.target!.result, contents: text });

        setMemo(newMemo);
        setText("");
        console.log("Data added successfully");
      };
    };

    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("addIndexedMemo time:", time);
  };

  const deleteIndexedMemo = (idx: number, id: number) => {
    const start = new Date();
    let newMemo = [...memo];
    newMemo.splice(idx, 1);
    setMemo(newMemo);

    let db;
    const request = window.indexedDB.open("memoListDB", 1);

    request.onerror = function (event: any) {
      console.log("Error opening database:", event.target!.errorCode);
    };

    request.onsuccess = function (event: any) {
      db = event.target!.result;

      const transaction = db.transaction(["memoList"], "readwrite");
      const objectStore = transaction.objectStore("memoList");

      const requestUpdate = objectStore.delete(id);

      requestUpdate.onerror = function (event: any) {
        console.log("Error removing data:", event.target!.errorCode);
      };

      requestUpdate.onsuccess = function (event: any) {
        console.log("Data removed successfully");
      };
    };

    const end = new Date();

    const time = end.getMilliseconds() - start.getMilliseconds();
    console.log("deleteIndexedMemo time:", time);
  };

  return (
    <section>
      <h1>Indexed DB ToDos</h1>
      <MemoInputForm onSubmit={addIndexedMemo}>
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
            <label>{data.contents}</label>
            <button
              onClick={() => {
                deleteIndexedMemo(idx, data.id!);
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

export default OnlyIndexedDbToDos;
