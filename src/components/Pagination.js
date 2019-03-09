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
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul>
        <li>
          <EndButton
            disabled={prevDisabled}
            targetPage={currentPage - 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </EndButton>
        </li>

        <li>
          <NumberedButtons
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </li>

        <li>
          <EndButton
            disabled={nextDisabled}
            targetPage={currentPage + 1}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </EndButton>
        </li>
      </ul>
    </nav>
  );
};

const EndButton = ({ disabled, targetPage, onClick, children }) => {
  return (
    <a
      href="#"
      onClick={preventDefault(() => {
        if (disabled) return;
        onClick();
      })}
      disabled={disabled}
      aria-label={`Goto Page ${targetPage}`}
    >
      {children}
    </a>
  );
};

const NumberedButtons = ({ pageCount, currentPage, setCurrentPage }) => {
  return [...Array(pageCount)].map((derp, index) => {
    const pageNum = index + 1;
    const isSelectedPage = pageNum === currentPage;
    return (
      <li>
        <a
          key={index}
          href="#"
          className={isSelectedPage ? "selected" : undefined}
          onClick={preventDefault(() => setCurrentPage(pageNum))}
          aria-label={`Goto Page ${pageNum}`}
          aria-current={isSelectedPage ? "selected" : undefined}
        >
          {pageNum}
        </a>
      </li>
    );
  });
};

const preventDefault = theEvent => {
  return event => {
    event.preventDefault();
    theEvent.call();
  };
};

export default Pagination;
