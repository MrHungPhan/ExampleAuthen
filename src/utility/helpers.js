import { clearSession } from "./cookieStorage";

function handleAuthorization(status) {
  if (status === 401) {
    clearSession();
    window.location.reload();
  }
}

export { handleAuthorization };
