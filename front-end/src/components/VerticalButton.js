import React from "react";
import { Link } from "react-router-dom";

function VerticalButton({ imageSource, path, alternateText }) {
  return (
    <li>
      <Link className="verticalNav--button" to={path}>
        <img src={imageSource} alt={alternateText} />
      </Link>
    </li>
  );
}

export default VerticalButton;
