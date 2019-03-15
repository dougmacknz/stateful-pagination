import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PropTypes from "prop-types";
import rootReducer from "../reducers";

const Pagination = ({ children, itemsPerPage, onPageChange, pageCount }) => {
  const store = createStore(rootReducer, {
    itemsPerPage,
    onPageChange,
    pageCount
  });
  return <Provider store={store}>{children}</Provider>;
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number
};

export default Pagination;
