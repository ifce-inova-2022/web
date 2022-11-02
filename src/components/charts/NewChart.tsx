import { Chart } from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

//options do grafico
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
            type: "box",
            display: true,
            xMin: 18,
            xMax: 22,
            yMin: 0,
            // yMax: 30,
            backgroundColor: "rgba(248, 161, 98, 0.60)",
          },
        },
      },
      title: {
        display: true,
        //   text: "Chart.js Line Chart - Multi Axis",
      },
    },
};

const config = {
    options: options,
}

export function NewChart() {
  return <Line options={config.options} data={} />;
}
