import axios from "axios";

import { loginType } from "@test/types";

export const login = async (loginData: loginType) => {
  const { data, status } = await axios.post(
    "http://localhost:3000/auth/login",
    loginData
  );

  return { data, status };
};
