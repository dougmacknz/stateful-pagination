export const setCurrentPage = page => ({
  type: "SET_CURRENT_PAGE",
  page
});

export const setItemsPerPage = amount => ({
  type: "SET_ITEMS_PER_PAGE",
  amount
});

export const setItems = items => ({
  type: "SET_ITEMS",
  items
});
