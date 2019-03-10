import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Pagination = ({ itemsPerPage, containerClassName, children }) => {
  const [currentPage, setCurrentPage] = React.useState(1);

  return (
    <>
      <PaginationItems
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        containerClassName={containerClassName}
      >
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
const PaginationItems = ({
  currentPage,
  itemsPerPage,
  containerClassName,
  children
}) => {
  const offset = (currentPage - 1) * itemsPerPage;
  const total = offset + itemsPerPage;
  const content = children.slice(offset, total);
  return <div className={containerClassName}>{content}</div>;
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
  const prevDisabled = prevOffset <= 0;
  const nextDisabled = nextOffset >= itemLength;
  const pageCount = itemLength / itemsPerPage;

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className="pagination">
        <EndButton
          disabled={prevDisabled}
          targetPage={currentPage - 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lsaquo;
        </EndButton>

        <NumberedButtons
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <EndButton
          disabled={nextDisabled}
          targetPage={currentPage + 1}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &rsaquo;
        </EndButton>
      </ul>
    </nav>
  );
};

const EndButton = ({ disabled, targetPage, onClick, children }) => {
  return (
    <li className={classNames({ "page-item": true, disabled: disabled })}>
      <a
        href="#"
        className="page-link"
        onClick={preventDefault(() => {
          if (disabled) return;
          onClick();
        })}
        aria-label={`Goto Page ${targetPage}`}
        aria-disabled={disabled}
      >
        {children}
      </a>
    </li>
  );
};

const NumberedButtons = ({ pageCount, currentPage, setCurrentPage }) => {
  return [...Array(pageCount)].map((derp, index) => {
    const pageNum = index + 1;
    const isSelectedPage = pageNum === currentPage;
    return (
      <li
        className={classNames({
          "page-item": true,
          active: isSelectedPage
        })}
      >
        <a
          key={index}
          href="#"
          className="page-link"
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
