import { formatXAxis } from "./DailyActivity";
import DailyActivity from "./DailyActivity";
import { render } from '@testing-library/react'
import { screen } from '@testing-library/react';
import React from 'react';

it('formatXAxis(): Should be return number + 1', () => {
   const result = formatXAxis(0)
   expect(result).toBe(1)
})

it('Should render the component DaylyActivity', () => {
  const userActivity = {
    sessions: [
        {
            "day": "2020-07-01",
            "kilogram": 70,
            "calories": 240
        },
        {
            "day": "2020-07-02",
            "kilogram": 69,
            "calories": 220
        },
        {
            "day": "2020-07-03",
            "kilogram": 70,
            "calories": 280
        },
        {
            "day": "2020-07-04",
            "kilogram": 70,
            "calories": 500
        },
        {
            "day": "2020-07-05",
            "kilogram": 69,
            "calories": 160
        },
        {
            "day": "2020-07-06",
            "kilogram": 69,
            "calories": 162
        },
        {
            "day": "2020-07-07",
            "kilogram": 69,
            "calories": 390
        }
    ],
    userId: 18
  }

  render(<DailyActivity userActivity={userActivity}/>)

})