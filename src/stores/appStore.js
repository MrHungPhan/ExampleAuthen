import { decorate, observable, action } from "mobx";

class AppStore {
  user = { email: "", password: "" };

  handleChangeLoginMeta(data) {
    this.user = { ...this.user, ...data };
  }
}
// create react app cannot cofig babel plugins  'plugin-proposal-decorators'
decorate(AppStore, {
  user: observable,
  handleChangeLoginMeta: action.bound
});

export default AppStore;
