/* eslint-disable no-unused-vars */
import React from 'react';
import { Bar } from 'react-chartjs-2';
import tabsData from '../data/tabs.json';
import { Chart as ChartJs } from 'chart.js/auto';
const DummyChart = () => {
  const data = {
    labels: tabsData.map((data) => data.title),
    datasets: [
      {
        label: 'Dummy Chart',
        data: tabsData.map((data) => data.order),
        backgroundColor: ['red', 'blue', 'purple'],
        borderColor: 'green',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mainContent">
      <h1 className="mainContent__title">Dummy Chart</h1>
      <Bar data={data} />
    </div>
  );
};

export default DummyChart;
