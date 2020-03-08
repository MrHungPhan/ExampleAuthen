import Cookie from "js-cookie";
const ACCESS_TOKEN = "access_token";

function getAccessToken() {
  return Cookie.get(ACCESS_TOKEN);
}

function setAccessToken(token) {
  Cookie.set(ACCESS_TOKEN, token);
}

function clearSession() {
  Cookie.remove(ACCESS_TOKEN);
}

function hasLogin() {
  return !!Cookie.get(ACCESS_TOKEN);
}

export { getAccessToken, setAccessToken, clearSession, hasLogin };
