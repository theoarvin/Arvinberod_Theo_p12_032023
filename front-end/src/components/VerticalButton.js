import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function VerticalButton({ imageSource, path, alternateText }) {
  return (
    <li>
      <Link className="verticalNav--button" to={path}>
        <img src={imageSource} alt={alternateText} />
      </Link>
    </li>
  );
}

VerticalButton.propTypes = {
  imageSource: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  alternateText: PropTypes.string.isRequired,
};
export default VerticalButton;
