import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export const options: any = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  animation: {
    duration: 1000,
  },
  stacked: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      // text: "Chart.js Bar Chart",
    },
  },
  scales: {
    y: {
      type: "linear" as const,
      title: {
        display: true,
        text: "Consumo Diário (kW)",
      },
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      title: {
        display: true,
        text: "Consumo Diário (R$)",
      },
      position: "right" as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const data = {
  labels,
  datasets: [
    {
      label: "Em ponta",
      data: [11, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 18],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "Fora ponta",
      data: [12, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 18],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function ChartMonthly() {
  return <Bar options={options} data={data} />;
}
