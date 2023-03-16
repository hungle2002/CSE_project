import React from "react";
import styles from "./Chart.module.scss";
import classNames from "classnames/bind";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
  Filler,
  Tooltip,
  TimeScale,
  Title,
  Legend
} from "chart.js";
const cx = classNames.bind(styles);
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, TimeScale, Title,
  Legend)
const ChartBox = ({ }) => {
  const data = {
    labels: ['01/3', '02/3', '03/3', '04/3', '05/3', '06/3', '07/3'],
    datasets: [
      {
        label: "Moisture",
        // yAxisID: 'moisture',
        data: [70, 40, 60, 23, 40, 23, 42],
        fill: false,
        borderColor: 'rgba(52, 122, 226, 1)',
        tension: 0.2,
        yAxisID: 'y',
      },
      {
        label: "Consumption",
        // yAxisID: 'consumption',
        data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
        fill: false,
        borderColor: 'rgba(255, 149, 0, 1)',
        tension: 0.2,
        yAxisID: 'y1',
      },
    ]
  }
  const options = {
    responsive: true,
    showTooltips: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
      },
    },
    scales:
    {
      y:
      {
        min: 0,
        max: 100,
        type: 'linear',
        display: true
      },
      y1: {
        type: 'linear',
        display: true,
        min: 0,
        max: 20000,
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
  return (
    <div className={cx('chart-box')}>
      <Line
        data={data}
        options={options} />
    </div>
  );

}

export default ChartBox;
