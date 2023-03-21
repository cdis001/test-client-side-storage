import axios from "axios";

import { memoTypes } from "@test/types";
import { getCookie } from "./cookie";

const token = getCookie("token");
const userId = getCookie("userId");
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true;
axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:3000";

export const getMemo = async () => {
  const { data, status } = await axios.get(
    "http://localhost:3000/memo/user/" + userId
  );

  return { data, status };
};

export const getCookieMemo = async (token: string) => {
  const { data, status } = await axios.get(
    "http://localhost:3000/memo/cookie/user",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { data, status };
};

export const createMemo = async (memo: memoTypes, token: string) => {
  const { data, status } = await axios.post(
    "http://localhost:3000/memo",
    {
      ...memo,
      userId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { data, status };
};

export const updateMemo = async (memo: memoTypes, token: string) => {
  const { data, status } = await axios.patch(
    "http://localhost:3000/memo/" + memo.id,
    { ...memo, userId },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { data, status };
};

export const deleteMemo = async (memoId: number, token: string) => {
  const { data, status } = await axios.delete(
    "http://localhost:3000/memo/" + memoId,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return { data, status };
};
