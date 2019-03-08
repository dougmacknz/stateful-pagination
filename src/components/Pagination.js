import * as React from "react";
import PropTypes from "prop-types";

const Pagination = ({ itemsPerPage, children }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <PaginationItems currentPage={currentPage} itemsPerPage={itemsPerPage}>
        {children}
      </PaginationItems>
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemLength={children.length}
        itemsPerPage={itemsPerPage}
      />
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired
};

/**
 * Displays the current page of items
 */
const PaginationItems = ({ currentPage, itemsPerPage, children }) => {
  const offset = (currentPage - 1) * itemsPerPage;
  const total = offset + itemsPerPage;
  return children.slice(offset, total);
};

/**
 * Displays the pagination buttons
 */
const PaginationButtons = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  itemLength
}) => {
  const prevOffset = (currentPage - 1) * itemsPerPage;
  const nextOffset = currentPage * itemsPerPage;
  const prevDisabled = prevOffset <= 0 ? "disabled" : "";
  const nextDisabled = nextOffset >= itemLength ? "disabled" : "";

  return (
    <>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={prevDisabled}
      >
        Prev
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={nextDisabled}
      >
        Next
      </button>
    </>
  );
};

export default Pagination;
