import AppStore from './appStore';

class RootStore {
  constructor() {
    this.appStore = new AppStore();
  }
}

const rootStore = new RootStore();

export default rootStore;