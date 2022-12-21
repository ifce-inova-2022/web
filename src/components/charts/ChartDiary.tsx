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
import {
  dataIntervalMean,
  dataIntervalMeanConsumiption,
  dataIntervalMeanDA,
  dataIntervalMeanDR,
} from "../../utils/dataExemple";
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
              size: 16,
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
      usePointStyle: true,
    },
  },
};

const labels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24,
];

// soma
// function accumulateMeans(means: number[]) {
//   let i = 0;
//   let accumulate = means.reduce((acc, current) => acc + current, i); 
//   return accumulate;
// }



const meanDA = Object.values(dataIntervalMeanDA.m_pa_fp);
// let accumulateMeanDA : number[] = [];
// accumulateMeanDA.push(accumulateMeans(meanDA));

// console.log(accumulateMeanDA.push(accumulateMeans(meanDA)));


const meanDR = Object.values(dataIntervalMeanDR.m_pr_fp);
const meanConsumiption = Object.values(dataIntervalMeanConsumiption.m_c_fp);

export const data = {
  labels,
  datasets: [
    {
      label: "Demanda Ativa",
      borderColor: "rgb(24, 255, 0)",
      backgroundColor: "rgb(24, 255, 0)",
      data: meanDA,
      yAxisID: "y",
      pointStyle: "rectRot",
      hoverRadius: 6
    },
    {
      label: "Demanda Reativa",
      data: meanDR,
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
      yAxisID: "y",
      pointStyle: "rectRot",
      hoverRadius: 6
    },
    {
      label: "Consumo em Reais (R$)",
      data: meanConsumiption,
      borderColor: "rgb(15, 38, 241)",
      backgroundColor: "rgb(15, 38, 241)",
      yAxisID: "y1",
      pointStyle: "rectRot",
      hoverRadius: 6
    },
  ],
};

export function ChartDiary() {
  const [showModal, setShowModal] = useState(false);
  const [datasetIndex, setDatasetIndex] = useState(0);

  function closeModal() {
    setShowModal(false);
  }

  const openModal = (element: InteractionItem[]) => {
    if (!element.length) return;

    // console.log(element.length);

    setShowModal(true);

    const { datasetIndex, index } = element[0];

    setDatasetIndex(datasetIndex);
    console.log(datasetIndex);

    // console.log(data.labels[index], data.datasets[datasetIndex].label);
  };

  const chartRef = useRef<ChartJS>(null);

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }
    openModal(getElementAtEvent(chart, event));
  };

  return (
    <div>
      <Chart
        ref={chartRef}
        type="line"
        onClick={onClick}
        options={options}
        data={data}
      />
      {showModal ? (
        <Modal
          measurements={
            datasetIndex === 0
              ? meanDA
              : datasetIndex === 1
              ? meanDR
              : datasetIndex === 2
              ? meanConsumiption
              : []
          }
          title={data.datasets[datasetIndex].label}
          period="14 de outubro de 2022"
          closeModal={closeModal}
        />
      ) : (
        ""
      )}
    </div>
  );
}

// 0 = Demanda Ativa
// 1 = Demanda Reativa
// 2 = Consumo em Reais
