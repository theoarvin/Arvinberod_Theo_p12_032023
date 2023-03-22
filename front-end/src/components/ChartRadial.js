import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

function ChartRadial({ score }) {
  const data = score;
  const number = 1;
  const value = number - data;
  const result = data * 100;
  const dataChart = [
    { id: "1", name: "L1", value: data, fill: "#E60000" },
    { id: "2", name: "L2", value: value, fill: "#fff" },
  ];

  Pie.propTypes = {
    data: PropTypes.array.isRequired,
  };

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <text
            className="chart--title"
            x={40}
            y={30}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            score
          </text>
          <Pie
            startAngle={90}
            endAngle={450}
            data={dataChart}
            dataKey="value"
            outerRadius={70}
            innerRadius={60}
          />
        </PieChart>
      </ResponsiveContainer>

      <p className="chart--text">
        <strong>{result}%</strong>
        <br />
        de votre
        <br />
        objectif
      </p>
    </div>
  );
}

ChartRadial.propTypes = {
  score: PropTypes.number,
};
export default ChartRadial;
