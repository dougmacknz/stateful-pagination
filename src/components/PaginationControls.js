import * as React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setCurrentPage } from "../actions";

/**
 * Displays the pagination buttons
 */
const PaginationControls = ({
  currentPage,
  setCurrentPage,
  itemsPerPage,
  itemLength,
  prevLabel,
  nextLabel,
  controlClassName,
  maxButtons
}) => {
  const prevOffset = (currentPage - 1) * itemsPerPage;
  const nextOffset = currentPage * itemsPerPage;
  const prevDisabled = prevOffset <= 0;
  const nextDisabled = nextOffset >= itemLength;
  const pageCount = itemLength / itemsPerPage;

  if (pageCount < 1) {
    return null;
  }

  return (
    <nav role="navigation" aria-label="Pagination Navigation">
      <ul className="pagination">
        <EndButton
          disabled={prevDisabled}
          targetPage={currentPage - 1}
          controlClassName={controlClassName}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          {prevLabel}
        </EndButton>

        <NumberedButtons
          pageCount={pageCount}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          controlClassName={controlClassName}
          maxButtons={maxButtons}
        />

        <EndButton
          disabled={nextDisabled}
          targetPage={currentPage + 1}
          controlClassName={controlClassName}
          onClick={() => setCurrentPage(currentPage + 1)}
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
  controlClassName: "page-link",
  maxButtons: 5
};

PaginationControls.propTypes = {
  prevLabel: PropTypes.node,
  nextLabel: PropTypes.node,
  controlClassName: PropTypes.string
};

/**
 * 'Previous' or 'Next' button
 */
const EndButton = ({
  disabled,
  targetPage,
  onClick,
  controlClassName,
  children
}) => {
  return (
    <li className={classNames({ "page-item": true, disabled: disabled })}>
      <a
        href="#"
        className={controlClassName}
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
  controlClassName,
  maxButtons
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
          "page-item": true,
          active: isSelectedPage
        })}
      >
        <a
          href="#"
          className={controlClassName}
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

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    itemLength: state.items.length
  };
};

export default connect(
  mapStateToProps,
  { setCurrentPage }
)(PaginationControls);
