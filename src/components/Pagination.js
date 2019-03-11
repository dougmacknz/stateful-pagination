import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import PropTypes from "prop-types";
import rootReducer from "../reducers";

const Pagination = ({ children, itemsPerPage }) => {
  const store = createStore(rootReducer, { itemsPerPage: itemsPerPage });
  return <Provider store={store}>{children}</Provider>;
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
