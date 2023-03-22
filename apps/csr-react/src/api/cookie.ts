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

// export const setCookie = (cookieName: string, cookieValue, cookieExpire) => {
//   let cookieText = escape(cookieName) + "=" + escape(cookieValue);
//   cookieText += cookieExpire ? "; EXPIRES=" + cookieExpire.toGMTString() : "";
//   document.cookie = cookieText;
// };

// export const getCookie = (cookieName) => {
//   var cookieValue = null;
//   if (document.cookie) {
//     const array = document.cookie.split(escape(cookieName) + "=");
//     if (array.length >= 2) {
//       const arraySub = array[1].split(";");
//       cookieValue = unescape(arraySub[0]);
//     }
//   }
//   return cookieValue;
// };

// export const deleteCookie = (cookieName) => {
//   const cookieValue = getCookie(cookieName);
//   if (cookieValue) {
//     setCookie(cookieName, cookieValue, new Date(1));
//   }
// };

// export const clearCookies = () => {
//   console.log(document.cookie);
//   document.cookie = null;
// };
