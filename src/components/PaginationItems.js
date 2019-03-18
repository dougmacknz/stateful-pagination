import * as React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setItems } from "../actions";

/**
 * Displays the current page of items
 */
const PaginationItems = ({
  currentPage,
  itemsPerPage,
  setItems,
  pageCount,
  children
}) => {
  React.useEffect(() => {
    setItems(children);
  }, []);

  const offset = (currentPage - 1) * itemsPerPage;
  const total = offset + itemsPerPage;
  let content;

  if (pageCount) {
    // lazy load mode: filter based on position prop of <PaginationItem>
    content = children.filter(child => {
      return child.props.position >= offset && child.props.position < total;
    });
  } else {
    // normal mode: filter based on position in full list
    content = children.slice(offset, total);
  }

  return content;
};

PaginationItems.propTypes = {
  containerClassName: PropTypes.string
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage,
    pageCount: state.pageCount
  };
};

export default connect(
  mapStateToProps,
  { setItems }
)(PaginationItems);
