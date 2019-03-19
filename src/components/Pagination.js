import * as React from "react";
import PropTypes from "prop-types";
import rootReducer from "../reducers";
import { StateProvider } from "../helpers/state";

const Pagination = ({ children, itemsPerPage, onPageChange, pageCount }) => {
  const initialState = {
    itemsPerPage,
    onPageChange,
    pageCount,
    currentPage: 1,
    itemLength: null
  };

  return (
    <StateProvider initialState={initialState} reducer={rootReducer}>
      {children}
    </StateProvider>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func,
  pageCount: PropTypes.number
};

export default Pagination;
