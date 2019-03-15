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

const onPageChange = (onPageChange = null, action) => {
  switch (action.type) {
    case "SET_ON_PAGE_CHANGE":
      return action.onPageChange;
    default:
      return onPageChange;
  }
};

const pageCount = (pageCount = null, action) => {
  switch (action.type) {
    case "SET_PAGE_COUNT":
      return action.pageCount;
    default:
      return pageCount;
  }
};

export default combineReducers({
  currentPage,
  items,
  itemsPerPage,
  onPageChange,
  pageCount
});
