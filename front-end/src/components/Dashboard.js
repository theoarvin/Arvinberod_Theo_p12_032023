import React, { useContext } from "react";
import { userContext } from "../contexts/appContext";
import DailyActivity from "./DailyActivity";
import Info from "./Info";
import imgCalories from "../assets/img/imgCalories.svg";
import imgProteines from "../assets/img/imgProteines.svg";
import imgGlucides from "../assets/img/imgGlucides.svg";
import imgLipides from "../assets/img/imgLipides.svg";
import ChartRadial from "./ChartRadial";
import ChartRadar from "./ChartRadar";
import ChartLine from "./ChartLine";


function Dashboard() {
  const dataContext = useContext(userContext);
  const userName = dataContext[0]?.user.data.userInfos.firstName;
  const userActivity = dataContext[1]?.activity.data;
  const calorieCount = dataContext[0]?.user.data.keyData.calorieCount;
  const proteinCount = dataContext[0]?.user.data.keyData.proteinCount;
  const carbohydrateCount = dataContext[0]?.user.data.keyData.carbohydrateCount;
  const lipidCount = dataContext[0]?.user.data.keyData.lipidCount;
  const score = dataContext[0]?.user.data.score;
  const performance = dataContext[3]?.performance.data.data;
  const sessions = dataContext[2]?.average.data.sessions;
  
  return (
    <div className="dashboard">
      <div className="userName--block">
        <h1 className="userName--text">
          <strong>
            Bonjour <span>{userName}</span>
          </strong>
        </h1>
        <p className="textTitle">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="dashboard--block">
        <div className="chart--block">
          <DailyActivity userActivity={userActivity} />

          <div className="chart--list">
            <ChartLine sessions={sessions} />
            <ChartRadar performance={performance} />
            <ChartRadial score={score} />
          </div>
        </div>
        <div className="infos--block">
          <Info img={imgCalories} userInfo={calorieCount} />
          <Info img={imgProteines} userInfo={proteinCount} />
          <Info img={imgGlucides} userInfo={carbohydrateCount} />
          <Info img={imgLipides} userInfo={lipidCount} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
