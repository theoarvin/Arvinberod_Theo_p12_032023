import React from "react";
import { Line, LineChart, Tooltip, XAxis } from "recharts";
import PropTypes from "prop-types";

function ChartLine({ sessions }) {
  const mondaySession = sessions ? sessions[0].sessionLength : 0;
  const tuesdaySession = sessions ? sessions[1].sessionLength : 0;
  const wednesdaySession = sessions ? sessions[2].sessionLength : 0;
  const thursdaySession = sessions ? sessions[3].sessionLength : 0;
  const fridaySession = sessions ? sessions[4].sessionLength : 0;
  const saturdaySession = sessions ? sessions[5].sessionLength : 0;
  const sundaySession = sessions ? sessions[6].sessionLength : 0;

  const data = [
    {
      value: mondaySession,
    },
    {
      value: tuesdaySession,
    },
    {
      value: wednesdaySession,
    },
    {
      value: thursdaySession,
    },
    {
      value: fridaySession,
    },
    {
      value: saturdaySession,
    },
    {
      value: sundaySession,
    },
  ];

  LineChart.propTypes = {
    data: PropTypes.array.isRequired,
  };

  const customMouseOver = (e) => {
    return <div className="customMouseOver">hello</div>;
  };

  return (
    <div className="chart chartLine">
      <LineChart width={260} height={260} data={data}>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="name"
          tickSize={3}
          tick={{ fill: "white", fontSize: 12 }}
        />
        <Tooltip dataKey="value" />
        <Line
          activeDot={{ customMouseOver }}
          type="natural"
          dot={false}
          dataKey="value"
          stroke="#fff"
        />
      </LineChart>
      <div className="block--days">
        <span>L</span>
        <span>M</span>
        <span>M</span>
        <span>J</span>
        <span>V</span>
        <span>S</span>
        <span>D</span>
      </div>
    </div>
  );
}

export default ChartLine;
