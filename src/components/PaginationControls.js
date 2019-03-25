import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { getState } from "../helpers/state";

/**
 * Displays the pagination buttons
 */
const PaginationControls = ({
  prevLabel,
  nextLabel,
  ulClassName,
  liClassName,
  anchorClassName,
  maxButtons
}) => {
  const [
    { currentPage, itemsPerPage, itemLength, onPageChange, pageCount },
    dispatch
  ] = getState();

  const setCurrentPage = page =>
    dispatch({
      type: "SET_CURRENT_PAGE",
      page
    });

  // If a specific page count hasn't been specified- calculate it based on the items inside PaginationItems
  let calculatedPageCount;

  if (pageCount) {
    calculatedPageCount = pageCount;
  } else {
    calculatedPageCount = Math.ceil(itemLength / itemsPerPage);
  }

  // No need to display pagination controls when there's just one page
  if (calculatedPageCount <= 1) {
    return null;
  }

  const prevDisabled = currentPage === 1;
  const nextDisabled = currentPage === calculatedPageCount;

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className={ulClassName}>
        <EndButton
          disabled={prevDisabled}
          targetPage={currentPage - 1}
          liClassName={liClassName}
          anchorClassName={anchorClassName}
          onClick={() =>
            onControlClick(currentPage - 1, setCurrentPage, onPageChange)
          }
        >
          {prevLabel}
        </EndButton>

        <NumberedButtons
          pageCount={calculatedPageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          liClassName={liClassName}
          anchorClassName={anchorClassName}
          maxButtons={maxButtons}
          onPageChange={onPageChange}
        />

        <EndButton
          disabled={nextDisabled}
          targetPage={currentPage + 1}
          liClassName={liClassName}
          anchorClassName={anchorClassName}
          onClick={() =>
            onControlClick(currentPage + 1, setCurrentPage, onPageChange)
          }
        >
          {nextLabel}
        </EndButton>
      </ul>
    </nav>
  );
};

PaginationControls.defaultProps = {
  prevLabel: "Previous",
  nextLabel: "Next",
  ulClassName: "pagination",
  liClassName: "page-item",
  anchorClassName: "page-link",
  maxButtons: 5
};

PaginationControls.propTypes = {
  prevLabel: PropTypes.node,
  nextLabel: PropTypes.node,
  ulClassName: PropTypes.string,
  liClassName: PropTypes.string,
  anchorClassName: PropTypes.string
};

/**
 * 'Previous' or 'Next' button
 */
const EndButton = ({
  disabled,
  targetPage,
  onClick,
  liClassName,
  anchorClassName,
  children
}) => {
  return (
    <li className={classNames({ [liClassName]: true, disabled: disabled })}>
      <a
        href="#"
        className={anchorClassName}
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

/**
 * Numbered page buttons
 */
const NumberedButtons = ({
  pageCount,
  currentPage,
  setCurrentPage,
  liClassName,
  anchorClassName,
  maxButtons,
  onPageChange
}) => {
  const breakPoint = Math.floor(maxButtons / 2) + 1;
  const breakPoint2 = Math.ceil(maxButtons / 2) - 1;
  const breakPoint3 = maxButtons - 1;
  let startPage, endPage;

  if (pageCount <= maxButtons) {
    startPage = 1;
    endPage = pageCount;
  } else {
    if (currentPage <= breakPoint) {
      startPage = 1;
      endPage = maxButtons;
    } else if (currentPage + breakPoint2 >= pageCount) {
      startPage = pageCount - breakPoint3;
      endPage = pageCount;
    } else {
      startPage = currentPage - Math.floor(maxButtons / 2);
      endPage = currentPage + breakPoint2;
    }
  }

  return [...Array(endPage + 1 - startPage).keys()].map(index => {
    const pageNum = startPage + index;
    const isSelectedPage = pageNum === currentPage;
    return (
      <li
        key={index}
        className={classNames({
          [liClassName]: true,
          active: isSelectedPage
        })}
      >
        <a
          href="#"
          className={anchorClassName}
          onClick={preventDefault(() =>
            onControlClick(pageNum, setCurrentPage, onPageChange)
          )}
          aria-label={`Goto Page ${pageNum}`}
          aria-current={isSelectedPage ? "selected" : undefined}
        >
          {pageNum}
        </a>
      </li>
    );
  });
};

const onControlClick = (newPage, setCurrentPage, onPageChange) => {
  // Change the page
  setCurrentPage(newPage);

  // Run custom callback function if it's been sent into the component
  if (
    typeof onPageChange !== "undefined" &&
    typeof onPageChange === "function"
  ) {
    onPageChange(newPage);
  }
};

const preventDefault = theEvent => {
  return event => {
    event.preventDefault();
    theEvent.call();
  };
};

export default PaginationControls;
