import { decorate, observable, action } from "mobx";
import requestHelper from "utility/requestHelper";
import { setAccessToken } from "utility/cookieStorage";

class AppStore {
  isLoading = false;
  errors = {};
  user = { email: "", password: "" };
  userData = {};

  handleChangeLoginMeta(data) {
    this.user = { ...this.user, ...data };
  }

  async dispatchLogin() {
    this.isLoading = true;
    try {
      const { data } = await requestHelper.request({
        method: "POST",
        url: "user/login",
        data: {
          ...this.user
        }
      });
      const { token } = data.data;
      setAccessToken(token);
    } catch (error) {
      this.errors = error.data.data || "";
    } finally {
      this.isLoading = false;
    }
  }

  async getUserData() {
    this.isLoading = true;
    try {
      const { data } = await requestHelper.request({
        method: "GET",
        url: "user/me"
      });
      this.userData = data.data;
    } catch (error) {
      this.errors = error.data;
    } finally {
      this.isLoading = false;
    }
  }
}
// create react app cannot cofig babel plugins  'plugin-proposal-decorators'
decorate(AppStore, {
  isLoading: observable,
  errors: observable,
  user: observable,
  userData: observable,
  handleChangeLoginMeta: action.bound,
  dispatchLogin: action.bound,
  getUserData: action.bound
});

export default AppStore;
