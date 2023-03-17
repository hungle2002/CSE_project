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
const ChartBox = ({ title, data, opNum }) => {
  const options1 = {
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
  const options2 = {
    responsive: true,
    showTooltips: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    scales:
    {
      y:
      {
        type: 'linear',
        display: true,
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  }
  const options = opNum ? options1 : options2
  return (
    <div className={cx('chart-box')}>
      <h1>{title} Analytics</h1>
      <p>Realtime - last 7 days</p>
      <div className={cx('chart')}>
        <Line
          data={data}
          options={options} />
      </div>
    </div>
  );

}

export default ChartBox;
