import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faSort } from '@fortawesome/free-solid-svg-icons'

const SortButton = ({ onSort, sortOrder }) => {
  return <FontAwesomeIcon icon={faSort} onClick={onSort} />;
};

export default SortButton;
