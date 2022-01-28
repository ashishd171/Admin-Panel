import React from 'react';
import { Chart } from "react-google-charts";
import {Wrapper, Text} from './style'

export const data = [
  ["Task", "Hours per Day"],
  ["Піца", 11],
  ["Напої", 2],
  ["Гарячі напої", 2],
  ["Ланчі", 2],
  ["Снеки", 7],
  ["Солодощі", 7]
];

export const options = {
  title: "Витрати",
  pieHole: 0.8,
  is3D: false,
  pieSliceText: 'none',
  chartArea: { width: "256px", height: "256px" },
  legendTextStyle: { color: "#000000" },
};

const FinanceCostChart = () => {
  return (
    <div>
      <Wrapper>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <Text>По категоріям</Text>
      </Wrapper>
    </div>
  );
}

export default FinanceCostChart;
