import React from "react";

function Info({ img, userInfo }) {
  userInfo = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(userInfo);

  return (
    <div className="info">
      <img src={img} alt="" />
      <div className="text--block">
        <p>{userInfo}kcal</p>
        <span>calories</span>
      </div>
    </div>
  );
}

export default Info;
