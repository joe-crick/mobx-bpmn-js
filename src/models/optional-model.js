import { observable, decorate, action } from "mobx";
import items from "./test-data/items";

export class Items {
  items = items;

  appendItems(items) {
    this.items = this.items.concat(Array.isArray(items) ? items : [items]);
  }
}

decorate(Items, {
  items: observable,
  appendItems: action
});

export default new Items();
