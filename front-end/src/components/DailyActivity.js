import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import PropTypes from "prop-types";

export /**
* function to display the days of the week in number
* @param {number} tickItem index of array days (0 - 6)
* @returns number of days of the week (1 - 7)
*/
const formatXAxis = (tickItem) => {
 return tickItem + 1;
};

function DailyActivity({ userActivity }) {
  const activityData = userActivity?.sessions;
  
  
  
   /**
   * function to custom the tooltip
   * @returns tooltip for barChart
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[1].value}`}Kg</p>
          <p className="label">{`${payload[0].value}`}Kcal</p>
        </div>
      );
    }
    return null;
  };
  
  BarChart.propTypes = {
    data: PropTypes.array,
  };
  
  return (
    <div className="dailyActivity">
      <div className="header">
        <p className="header--title">Activité quotidienne</p>
        <div className="header--legende">
          <p className="header--legende__weight">Poids (kg)</p>
          <p className="header--legende__calories">Calories brûlées (kCal)</p>
        </div>
      </div>
      <div className="dailyActivity--chartBlock">
        <ResponsiveContainer width="100%"  height={230}>
          <BarChart
            maxBarSize={1}
            data={activityData}
           
          >
            <CartesianGrid strokeDasharray="2" vertical={false} />
            {/*
             <XAxis
              tickLine={false}
              domain={["dataMin", "dataMax"]}
              tickMargin={15}
              tick={{ stroke: "#9B9EAC" }}
              tickFormatter={formatXAxis}
              interval={0}
              padding={{ left: -35, right: -35 }}
              fontSize={12}
            />
            */}
           <XAxis
              axisLine={false}
              dot={false}
              tickFormatter={formatXAxis}
              tickLine={false}
              tickSize={10}
              padding={{ right: -20 , left: -20 }}
            />
            <YAxis
              dataKey="kilogram"
              orientation="right"
              domain={["dataMin - 5", "auto", "dataMax + 5"]}
              tickCount={"3"}
              type="number"
              tickMargin={30}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="calories"
              dataKey="calories"
              hide={true}
              orientation="left"
            />
            <Tooltip
              content={<CustomTooltip />}
              label=""
              allowEscapeViewBox={{ x: true, y: true }}
            />
            <Bar
              dataKey={"calories"}
              yAxisId="calories"
              fill="#E60000"
              name="kCal"
              radius={[20, 20, 0, 0]}
              maxBarSize={10}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              name="Kg"
              radius={[20, 20, 0, 0]}
              maxBarSize={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

DailyActivity.propTypes = {
  userActivity: PropTypes.object,
};
export default DailyActivity;
