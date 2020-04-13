import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";

class MenuStore {
  menu = [];
  loading = true;

  fetchAllMenuItems = async (restaurantID) => {
    try {
      const res = await instance.get(`restaurant/${restaurantID}/`);
      const menu = res.data.menu;
      this.menu = menu;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  updateMenuItem = async (menu, quantity) => {
    try {
      await instance.put(`menu/${menu.id}/`, { available_qty: quantity });
      alert(`${quantity} ${menu.name}'s Added`);
    } catch (err) {
      console.error(err);
    }
  };

  get total() {
    let total = 0;
    this.menu.forEach((item) => (total += item.total));
    return total;
  }

  get total_meals() {
    let total = 0;
    this.menu.forEach((item) => (total += item.available_qty));
    return total;
  }
}
decorate(MenuStore, {
  menu: observable,
  loading: observable,
  total: computed,
  total_meals: computed,
});

const menuStore = new MenuStore();
export default menuStore;
