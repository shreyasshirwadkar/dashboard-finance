import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { FiSettings } from 'react-icons/fi';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const lineChartData = {
  labels: ["MON 00:00", "06:00", "12:00", "18:00", "22:00", "TUE 00:00", "06:00", "12:00", "18:00", "22:00", "WED 00:00"],
  datasets: [
    {
      label: "CPU Power",
      data: [100, 50, 80, 70, 60, 90, 100, 80, 90, 110, 100],
      borderColor: "rgb(0, 0, 255)",
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      tension: 0,
      pointRadius: 0, // Ensure data points are not shown
      borderWidth: 2,
      fill: true,
    },
    {
      label: "Ideal Power",
      data: [90, 70, 90, 60, 70, 80, 90, 100, 70, 80, 90],
      borderColor: "rgb(0, 0, 0)",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
      tension: 0,
      pointRadius: 0, // Ensure data points are not shown
      borderWidth: 2,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: false,
      text: "Heartbeat Trend",
    },
  },
  scales: {
    x: {
      title: {
        display: false,
        text: "Time",
      },
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      title: {
        display: false,
        text: "Value",
      },
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const MainDailyTrend = () => {
  return (
    <div className="bg-blue-900 p-6 rounded-lg relative">
      <h2 className="text-xl mb-2 text-white">Main Daily Trend</h2>
      <p className="text-gray-400">CPU Power • Last 48 Hours</p>
      <p className="text-4xl font-bold mt-2 text-white">3721 MHz</p>
      <span className="text-red-500">▼ 1.29%</span>
      <Line options={options} data={lineChartData} />
      <div className="absolute top-0 right-0 p-4">
        <FiSettings className="text-white" size={24} />
      </div>
    </div>
  );
};

export default MainDailyTrend;
