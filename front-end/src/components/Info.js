import React from "react";
import PropTypes from "prop-types";

function Info({ img, userInfo }) {
  let data = userInfo ? userInfo : null;
  /**
   * function to format the number
   * @type {number}
   */
  const formatedData = (data) => {
    const result = new Intl.NumberFormat("en-IN", {
      maximumSignificantDigits: 3,
    }).format(data);
    return result;
  };

  return (
    <div className="info">
      <img src={img} alt="" />
      <div className="text--block">
        <p>{formatedData(data)}kcal</p>
        <span>calories</span>
      </div>
    </div>
  );
}

Info.propTypes = {
  userInfo: PropTypes.number,
};

export default Info;
