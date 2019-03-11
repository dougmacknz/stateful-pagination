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
  containerClassName,
  setItems,
  children
}) => {
  React.useEffect(() => {
    setItems(children);
  }, []);

  const offset = (currentPage - 1) * itemsPerPage;
  const total = offset + itemsPerPage;
  const content = children.slice(offset, total);
  return <div className={containerClassName}>{content}</div>;
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    itemsPerPage: state.itemsPerPage
  };
};

export default connect(
  mapStateToProps,
  { setItems }
)(PaginationItems);
