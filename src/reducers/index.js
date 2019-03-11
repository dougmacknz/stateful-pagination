import { combineReducers } from "redux";

const currentPage = (currentPage = 1, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return action.page;
    default:
      return currentPage;
  }
};

const items = (items = [], action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return action.items;
    default:
      return items;
  }
};

const itemsPerPage = (itemsPerPage = null, action) => {
  switch (action.type) {
    case "SET_ITEMS_PER_PAGE":
      return action.amount;
    default:
      return itemsPerPage;
  }
};

export default combineReducers({
  currentPage,
  items,
  itemsPerPage
});
