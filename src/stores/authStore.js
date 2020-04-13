import { decorate, observable } from "mobx";
import jwt_decode from "jwt-decode";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = (token) => {
    if (token) {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      console.log("token", token);
      localStorage.setItem("token", token);
      this.user = jwt_decode(token);
    } else {
      this.user = null;
      delete instance.defaults.headers.common.Authorization;
      localStorage.removeItem("token");
    }
  };

  signup = async (newUser) => {
    try {
      const res = await instance.post("register/", newUser);
      const user = res.data;
      this.setUser(user.access);
      console.log(this.user);
    } catch (err) {
      console.error(err);
    }
  };

  login = async (newUser) => {
    try {
      const res = await instance.post("login/", newUser);
      const user = res.data;
      this.setUser(user.access);
      console.log(this.user);
    } catch (err) {
      console.error(err);
    }
  };

  logout = () => {
    this.setUser();
  };

  checkForToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.setUser();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
