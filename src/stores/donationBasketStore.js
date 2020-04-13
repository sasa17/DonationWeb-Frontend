import { decorate, observable, computed } from "mobx";
import { instance } from "./instance";
import menuStore from "./menuStore";

class DonationBasketStore {
  donation_baskets = [];
  loading = true;
  last_months_data = [];

  fetchAllDonationBaskets = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await instance.get("donationbasket/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const donation_baskets = res.data;
      this.donation_baskets = donation_baskets;
      this.loading = false;
    } catch (err) {
      console.error(err);
    }
  };

  createDonationBasket = async () => {
    try {
      await instance.post("donationbasket/add/");
      alert("Menu Saved!");
    } catch (err) {
      console.error(err);
    }
  };

  get total_year() {
    let total_year = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getFullYear() === today.getFullYear()) {
        total_year += Number(item.total_donation_recieved);
      }
    });
    return total_year;
  }

  get total_month() {
    let total_month = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (
        new Date(item.date).getFullYear() === today.getFullYear() &&
        new Date(item.date).getMonth() === today.getMonth()
      ) {
        total_month += Number(item.total_donation_recieved);
      }
    });
    return total_month;
  }

  get total_weekly() {
    const getWeekOfMonth = (date) => {
      let adjustedDate = date.getDate() + date.getDay();
      let prefixes = ["0", "1", "2", "3", "4", "5"];
      return parseInt(prefixes[0 | (adjustedDate / 7)]) + 1;
    };
    let total_weekly = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (
        new Date(item.date).getFullYear() === today.getFullYear() &&
        new Date(item.date).getMonth() === today.getMonth() &&
        getWeekOfMonth(new Date(item.date)) === getWeekOfMonth(today)
      ) {
        total_weekly += Number(item.total_donation_recieved);
      }
    });
    return total_weekly;
  }

  get total_daily() {
    let total_daily = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (
        new Date(item.date).getMonth() === today.getMonth() &&
        new Date(item.date).getDate() === today.getDate() - 1
      ) {
        total_daily += Number(item.total_donation_recieved);
      }
    });
    return total_daily;
  }

  get meals() {
    let meals = (this.total_daily * menuStore.total_meals) / menuStore.total;
    return parseInt(meals);
  }

  get past_1_month() {
    let month1 = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getMonth() === today.getMonth() - 1) {
        month1 += Number(item.total_donation_recieved);
      }
    });
    return month1;
  }

  get past_2_month() {
    let month2 = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getMonth() === today.getMonth() - 2) {
        month2 += Number(item.total_donation_recieved);
      }
    });
    return month2;
  }

  get restaurant_total_past1() {
    let month1 = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getMonth() === today.getMonth() - 1) {
        month1 += Number(item.single_restaurant_total);
      }
    });
    return month1;
  }

  get restaurant_total_past2() {
    let month2 = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getMonth() === today.getMonth() - 2) {
        month2 += Number(item.single_restaurant_total);
      }
    });
    return month2;
  }

  get restaurant_total() {
    let month = 0.0;
    let today = new Date();
    this.donation_baskets.forEach((item) => {
      if (new Date(item.date).getMonth() === today.getMonth()) {
        month += Number(item.single_restaurant_total);
      }
    });
    return month;
  }
}
decorate(DonationBasketStore, {
  donation_baskets: observable,
  loading: observable,
  last_months_data: observable,
  total_year: computed,
  total_month: computed,
  total_weekly: computed,
  total_daily: computed,
  meals: computed,
});

const donationBasketStore = new DonationBasketStore();

export default donationBasketStore;
