import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ElementChartOptions,
  ChartOptions,
} from "chart.js";
import annotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const options = {
  responsive: true,
  interaction: {
    mode: "index" as const,
    intersect: false,
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
          yMax: 30,
          backgroundColor: 'rgba(248, 161, 98, 0.60)'
        },
      },
    },
    title: {
      display: true,
      //   text: "Chart.js Line Chart - Multi Axis",
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
      data: [0, 18, 14, 3, 14, 25, 30],
      borderColor: "rgb(24, 255, 0)",
      backgroundColor: "rgb(24, 255, 0)",
      yAxisID: "y",
    },
    {
      label: "Demanda Reativa",
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: "rgb(255, 0, 0)",
      backgroundColor: "rgb(255, 0, 0)",
      yAxisID: "y1",
    },
    {
      label: "Consumo em Reais (R$)",
      data: [3, 13, 16, 5, 12, 23, 19],
      borderColor: "rgb(15, 38, 241)",
      backgroundColor: "rgb(15, 38, 241)",
      yAxisID: "y1",
    },
  ],
};

export function ChartDiary() {
  return <Line options={options} data={data} />;
}
