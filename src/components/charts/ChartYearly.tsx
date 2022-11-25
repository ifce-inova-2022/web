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

const labels = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

export const data = {
  labels,
  datasets: [
    {
      label: "Em ponta",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      data: [
        5, 18, 14, 3, 14, 18, 14, 3, 14, 18, 14, 23
    
      ],
      yAxisID: "y",
    },
    {
      label: "Fora ponta",
      data: [
        2, 10, 5, 2, 20, 12, 20, 7, 10, 5, 2, 12
      ],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
    {
        label: "Consumo em reais (R$)",
        data: [
          2, 10, 5, 2, 10, 11, 20, 7, 10, 5, 2, 12
        ],
        backgroundColor: "rgba(53, 162, 98, 0.5)",
        yAxisID: "y",
    },
  ]
};

export function ChartYearly() {
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
