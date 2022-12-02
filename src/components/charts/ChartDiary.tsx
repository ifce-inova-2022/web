import React, { MouseEvent, useRef, useState } from "react";
import type { InteractionItem } from "chart.js";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
} from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { dataIntervalMean, dataIntervalMeanConsumiption, dataIntervalMeanDA, dataIntervalMeanDR } from "../../utils/dataExemple";
import { Modal } from "../Modal";

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

let dataMeans = Object.values(dataIntervalMean);

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
        text: "Consumo Diário (kWh)",
      },
      max: Math.max(...dataMeans),
      position: "left" as const,
    },
    y1: {
      type: "linear" as const,
      title: {
        display: true,
        text: "Consumo Diário (R$)",
      },
      max: Math.max(...dataMeans),
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
          label: {
            display: true,
            enabled: true,
            content: "Em ponta",
            color: "black",
            font: {
              size: 16
            },
          },
          display: true,
          xMin: 18,
          xMax: 22,
          yMin: 0,
          backgroundColor: "rgba(248, 161, 98, 0.60)",
          borderWidth: 0,
        },
      },
    },
    legend: {
      position: "bottom" as const,
    },
  },
};

const labels = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
];

export const data = {
  labels,
  datasets: [
    {
      label: "Demanda Ativa",
      borderColor: "rgb(24, 255, 0)",
      backgroundColor: "rgb(24, 255, 0)",
      data: Object.values(dataIntervalMeanDA.m_pa_p),
      yAxisID: "y",
    },
    {
      label: "Demanda Reativa",
      data: Object.values(dataIntervalMeanDR),
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
      yAxisID: "y",
    },
    {
      label: "Consumo em Reais (R$)",
      data: Object.values(dataIntervalMeanConsumiption),
      borderColor: "rgb(15, 38, 241)",
      backgroundColor: "rgb(15, 38, 241)",
      yAxisID: "y1",
    },
  ],
};



export function ChartDiary() {

  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  // const printElementAtEvent = (element: InteractionItem[]) => {
  //   if (!element.length) return;

  //   const { datasetIndex, index } = element[0];

  //   console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  // };

  // const chartRef = useRef<ChartJS>(null);

  // const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
  //   // const { current: chart } = chartRef;

  //   // if (!chart) {
  //   //   return;
  //   // }
  //   // printElementAtEvent(getElementAtEvent(chart, event));



  // };


  
  return (
    <div>
      <Chart
        // ref={chartRef}
        type="line"
        onClick={() => setShowModal(true)}
        options={options}
        data={data}
      />
      {showModal ? <Modal closeModal={closeModal} /> : ""}
    </div>
  );
}
