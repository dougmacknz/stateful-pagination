import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsPerPage }) => {
  return <div>Pagination component. Example prop: {itemsPerPage}</div>;
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
