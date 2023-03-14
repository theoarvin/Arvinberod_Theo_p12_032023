import React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import PropTypes from "prop-types";

function ChartLine({ sessions }) {
  const mondaySession = sessions ? sessions[0].sessionLength : 0;
  const tuesdaySession = sessions ? sessions[1].sessionLength : 0;
  const wednesdaySession = sessions ? sessions[2].sessionLength : 0;
  const thursdaySession = sessions ? sessions[3].sessionLength : 0;
  const fridaySession = sessions ? sessions[4].sessionLength : 0;
  const saturdaySession = sessions ? sessions[5].sessionLength : 0;
  const sundaySession = sessions ? sessions[6].sessionLength : 0;

  /**
   * Data for chartLine
   * @type {array}
   */
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

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="block-line">
          <div className="custom-tooltip-chartline">
            <p className="label">{`${payload[0].value}`} min</p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="chart chartLine">
      <p className="chartline--title">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <XAxis
            axisLine={false}
            tickLine={false}
            hide={true}
            dataKey="value"
            tickSize={3}
            tick={{ fill: "white", fontSize: 12 }}
          />

          <Line type="natural" dot={false} dataKey="value" stroke="#fff" />
          <Tooltip
            content={<CustomTooltip />}
            position={{ y: 0 }}
            offset={0}
            cursor={{ stroke: "transparent", strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

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

ChartLine.propTypes = {
  sessions: PropTypes.array,
};
export default ChartLine;
