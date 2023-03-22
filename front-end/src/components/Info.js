import React from "react";
import PropTypes from "prop-types";

 /**
   * function to format the number
   * @param {number} data 
   * @returns {number} return date formated
   */
export const formatedData = (data) => {
  const result = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(data);
  return result;
};

function Info({ img, userInfo }) {
  let data = userInfo ? userInfo : null;

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
