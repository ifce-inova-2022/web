import React, { MouseEvent, useRef } from "react";
import type { InteractionItem } from "chart.js";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent
} from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  annotationPlugin
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
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
  stacked: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Em ponta",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [
        5, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14,
        3, 14, 18, 13, 12, 16, 18, 14, 3, 14, 18
      ],
      yAxisID: "y",
    },
    {
      label: "Em ponta",
      data: [
        2, 10, 5, 2, 20, 10, 12, 7, 10, 5, 2, 20, 15, 12, 7, 10, 5, 2, 20, 3,
        12, 7, 10, 5, 15, 2, 20, 14, 11, 21
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
    {
      label: "Consumo Diário (R$)",
      data: [
        2, 10, 5, 2, 20, 15, 12, 7, 10, 5, 2, 20, 13, 11, 7, 10, 5, 2, 20, 3,
        16, 7, 10, 5, 15, 2, 20, 10, 12, 21
      ],
      backgroundColor: "rgba(53, 162, 98, 0.5)",
      yAxisID: "y",
  },
  ]
};

export function ChartMonthly() {
  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  };

  const chartRef = useRef<ChartJS>(null);

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }
    printElementAtEvent(getElementAtEvent(chart, event));
  };

  return (
    <Chart
      ref={chartRef}
      type="bar"
      onClick={onClick}
      options={options}
      data={data}
    />
  );
}
