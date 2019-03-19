const currentPageReducer = (currentPage = 1, action) => {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return action.page;
    default:
      return currentPage;
  }
};

const itemLengthReducer = (itemLength, action) => {
  switch (action.type) {
    case "SET_ITEM_LENGTH":
      return action.itemLength;
    default:
      return itemLength;
  }
};

const itemsPerPageReducer = (itemsPerPage, action) => {
  switch (action.type) {
    case "SET_ITEMS_PER_PAGE":
      return action.amount;
    default:
      return itemsPerPage;
  }
};

const onPageChangeReducer = (onPageChange, action) => {
  switch (action.type) {
    case "SET_ON_PAGE_CHANGE":
      return action.onPageChange;
    default:
      return onPageChange;
  }
};

const pageCountReducer = (pageCount, action) => {
  switch (action.type) {
    case "SET_PAGE_COUNT":
      return action.pageCount;
    default:
      return pageCount;
  }
};

export default (
  { currentPage, itemLength, itemsPerPage, onPageChange, pageCount },
  action
) => {
  return {
    currentPage: currentPageReducer(currentPage, action),
    itemLength: itemLengthReducer(itemLength, action),
    itemsPerPage: itemsPerPageReducer(itemsPerPage, action),
    onPageChange: onPageChangeReducer(onPageChange, action),
    pageCount: pageCountReducer(pageCount, action)
  };
};
