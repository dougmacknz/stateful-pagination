import * as React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  const offset = (currentPage - 1) * itemsPerPage;
  const total = offset + itemsPerPage;

  return children.slice(offset, total);
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired
};

export default Pagination;
