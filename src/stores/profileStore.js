import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  profile = [];
  loading = true;

  fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("newtoken", localStorage.getItem("token"));
      const res = await instance.get("restaurant/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const profile = res.data;
      this.profile = profile;
      console.log(profile);
      this.loading = false;
    } catch (err) {
      console.log("something went wrong fetching the data");
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable,
});

const profileStore = new ProfileStore();

export default profileStore;
