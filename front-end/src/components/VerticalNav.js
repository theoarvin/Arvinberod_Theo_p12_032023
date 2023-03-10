import React from "react";
import VerticalButton from "./VerticalButton";
import logoYoga from "../assets/img/logoYoga.svg";
import logoSwim from "../assets/img/logoSwim.svg";
import logoBike from "../assets/img/logoBike.svg";
import logoFitness from "../assets/img/logoFitness.svg";

function VerticalNav() {
  return (
    <div className="vertical--block">
      <div className="vertical--nav">
        <ul>
          <VerticalButton
            imageSource={logoYoga}
            path={"/"}
            alternateText={"logo yoga"}
          />
          <VerticalButton
            imageSource={logoSwim}
            path={"/"}
            alternateText={"logo nage"}
          />
          <VerticalButton
            imageSource={logoBike}
            path={"/"}
            alternateText={"logo velo"}
          />
          <VerticalButton
            imageSource={logoFitness}
            path={"/"}
            alternateText={"logo fitness"}
          />
        </ul>
      </div>
      <div className="copiryght--block">
        <p className="copiryght--text">Copiryght, SportSee 2020</p>
      </div>
    </div>
  );
}

export default VerticalNav;
