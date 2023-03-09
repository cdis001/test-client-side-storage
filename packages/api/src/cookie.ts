interface setCookieTypes {
  cookieName: string;
  cookieValue: any;
  cookieExpire: Date;
}

export const setCookie = (
  cookieName: string,
  cookieValue: any,
  cookieExpire: Date
) => {
  let cookieText = escape(cookieName) + "=" + escape(cookieValue);
  cookieText += cookieExpire ? "; EXPIRES=" + cookieExpire.toUTCString() : "";
  document.cookie = cookieText;
};

export const getCookie = (cookieName: string) => {
  var cookieValue = null;
  if (document.cookie) {
    const array = document.cookie.split(escape(cookieName) + "=");
    if (array.length >= 2) {
      const arraySub = array[1].split(";");
      cookieValue = unescape(arraySub[0]);
    }
  }
  return cookieValue;
};

export const deleteCookie = (cookieName: string) => {
  const cookieValue = getCookie(cookieName);
  if (cookieValue) {
    setCookie(cookieName, cookieValue, new Date(1));
  }
};

export const clearCookies = () => {
  console.log(document.cookie);
  document.cookie = "";
};
