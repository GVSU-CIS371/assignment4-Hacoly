import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType } from "../types/beverage";


export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    bases: bases,
    creamers: creamers,
    syrups: syrups,
    currentTemp: tempretures[0],
    currentBase: bases[0],
    currentCreamer: creamers[0],
    currentSyrup: syrups[0],
    currentName: "",
    beverages: [] as BeverageType[],
  }),

  actions: {
    makeBeverage() {
      if (this.currentName.trim() === "") {
        return;
      }

      const newBeverage: BeverageType = {
        id: crypto.randomUUID(),
        name: this.currentName,
        temp: this.currentTemp,
        base: this.currentBase,
        syrup: this.currentSyrup,
        creamer: this.currentCreamer,
      };

      this.beverages.push(newBeverage);
      this.currentName = "";
    },
    showBeverage(beverage: BeverageType) {
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
      this.currentName = beverage.name;
    },
  },

  persist: true,
});
