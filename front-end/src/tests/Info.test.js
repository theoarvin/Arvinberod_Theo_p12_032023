import { render } from '@testing-library/react'
import { screen } from '@testing-library/react';
import { formatedData } from "../components/Info";
import Info from '../components/Info';
import React from 'react';
import imgLipides from "../assets/img/imgLipides.svg";

it('formatedData(): Should be return number formated', () => {
  const result = formatedData(2500)
  expect(result).toBe("2,500")
})

it('Should render component <Info />', () => {
    const lipidCount = 120
    render(<Info img={imgLipides} userInfo={lipidCount}/>)

    const kcal = screen.getByText('120kcal')
    expect(kcal).toBeDefined()
})