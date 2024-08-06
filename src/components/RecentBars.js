import * as React from "react";
import { Bar } from "react-chartjs-2";
import { FiMaximize2 } from "react-icons/fi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const barChartData = {
  labels: ["Nov3", "Nov4", "Nov5", "Nov6", "Nov7", "Nov8", "Nov9"],
  datasets: [
    {
      label: "Hours",
      data: [8, 10, 4, 5, 9, 2, 5],
      backgroundColor: [
        "rgb(34, 100, 211)",
        "rgb(55, 131, 59)",
        "rgb(208, 148, 26)",
        "rgb(34, 100, 211)",
        "rgb(121, 117, 132)",
        "rgb(34, 100, 211)",
      ],
      barThickness: 40,
      borderRadius: 10,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "white",
      },
    },
    y: {
      display: false,
    },
  },
  plugins: {
    datalabels: {
      color: "white",
      anchor: "end",
      align: "top",
    },
  },
};

const RecentBars = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <h2 className="text-xl mb-2 text-white">Recent Bars</h2>
      <div className="absolute top-0 right-0 p-4">
        <FiMaximize2
          className="text-white bg-gray-800 p-2 rounded-full"
          size={40}
        />
      </div>
      <Bar options={options} data={barChartData} />
    </div>
  );
};

export default RecentBars;
