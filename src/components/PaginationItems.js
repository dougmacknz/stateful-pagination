import * as React from "react";
import PropTypes from "prop-types";
import { getState } from "../helpers/state";

/**
 * Displays the current page of items
 */
const PaginationItems = ({ children }) => {
  const [{ currentPage, itemsPerPage, pageCount }, dispatch] = getState();

  // Store the amount of items in the global store
  React.useEffect(() => {
    dispatch({
      type: "SET_ITEM_LENGTH",
      itemLength: children.length
    });
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

export default PaginationItems;
