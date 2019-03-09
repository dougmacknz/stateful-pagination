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
  const pageCount = itemLength / itemsPerPage;

  return (
    <>
      <EndButton
        disabled={prevDisabled}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </EndButton>

      <NumberedButtons pageCount={pageCount} setCurrentPage={setCurrentPage} />

      <EndButton
        disabled={nextDisabled}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </EndButton>
    </>
  );
};

const EndButton = ({ disabled, onClick, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

const NumberedButtons = ({ pageCount, setCurrentPage }) => {
  return [...Array(pageCount)].map((derp, index) => {
    const pageNum = index + 1;
    return <button onClick={() => setCurrentPage(pageNum)}>{pageNum}</button>;
  });
};

export default Pagination;
