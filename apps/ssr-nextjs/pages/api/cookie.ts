import { setCookie, getCookie, deleteCookie } from "@test/api";

export const setCookiesTodos = (memos: string[]) => {
  const exdate = new Date();
  exdate.setDate(exdate.getDate() + 3);

  setCookie("memo", memos, exdate);
};

export const getCookiesTodos = () => {
  const memoList = getCookie("memo");

  if (!!memoList) {
    return memoList;
  }
};
