import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import PropTypes from "prop-types";

function ChartRadar({ performance }) {
  const cardio = performance ? performance[0].value : 0;
  const energy = performance ? performance[1].value : 0;
  const endurance = performance ? performance[2].value : 0;
  const strength = performance ? performance[3].value : 0;
  const speed = performance ? performance[4].value : 0;
  const intensity = performance ? performance[5].value : 0;

  const newData = [
    {
      subject: "Intensité",
      A: intensity,
    },
    {
      subject: "Vitesse",
      A: speed,
    },
    {
      subject: "Force",
      A: strength,
    },
    {
      subject: "Endurance",
      A: endurance,
    },
    {
      subject: "Energie",
      A: energy,
    },
    {
      subject: "Cardio",
      A: cardio,
    },
  ];

  RadarChart.propTypes = {
    data: PropTypes.array.isRequired,
  };

  return (
    <div className="chart chartRadar">
      <RadarChart outerRadius={90} width={260} height={260} data={newData}>
        <PolarGrid gridType="polygon" radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          tick={{ fill: "white", fontSize: 12 }}
        />
        <Radar dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </div>
  );
}

export default ChartRadar;
