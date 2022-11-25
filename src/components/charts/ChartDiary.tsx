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
    annotation: {
      annotations: {
        box1: {
          type: "box" as const,
          display: true,
          xMin: 18,
          xMax: 22,
          yMin: 0,
          yMax: 45,
          backgroundColor: "rgba(248, 161, 98, 0.60)",
        },
      },
    },
    legend: {
      position: 'bottom' as const,
    },
  },
};

const labels = [
  "",
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
];

export const data = {
  labels,
  datasets: [
    {
      label: "Demanda Ativa",
      borderColor: "rgb(24, 255, 0)",
      backgroundColor: "rgb(24, 255, 0)",
      data: [
        0, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14,
        3, 14, 18, 13, 12, 16,
      ],
      yAxisID: "y",
    },
    {
      label: "Demanda Reativa",
      data: [
        0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30, 45, 0, 10, 5, 2, 20, 30,
        45, 0, 10, 5, 15,
      ],
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
      yAxisID: "y",
    },
    {
      label: "Consumo em Reais (R$)",
      data: [
        3, 13, 16, 5, 12, 23, 19, 3, 13, 16, 5, 12, 23, 19, 3, 13, 16, 5, 12,
        23, 19, 14, 13, 19, 26,
      ],
      borderColor: "rgb(15, 38, 241)",
      backgroundColor: "rgb(15, 38, 241)",
      yAxisID: "y1",
    },
  ]
};

export function ChartDiary() {
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
      type="line"
      onClick={onClick}
      options={options}
      data={data}
    />
  );
}
