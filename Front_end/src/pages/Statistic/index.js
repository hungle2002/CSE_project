import React, { useState } from 'react';
import StatCard from "../../components/StatCard"
import ChartBox from "../../components/Chart"
import classNames from "classnames/bind";
import styles from "./statistic.module.scss";
import {
  faDroplet,
  faSunPlantWilt,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";

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
const data2 = {
  labels: ['01/3', '02/3', '03/3', '04/3', '05/3', '06/3', '07/3'],
  datasets: [
    {
      label: "Consumption",
      // yAxisID: 'consumption',
      data: [2000, 14000, 4000, 4020, 10000, 8000, 12000],
      fill: false,
      borderColor: 'rgba(255, 149, 0, 1)',
      tension: 0.2,
      yAxisID: 'y',
    },
  ]
}

const avgMoisture = 39
const avgLight = 23283.5
const avgTemperature = 46827
const waterConsumption = 3304
const elecConsumption = 309521
const total = 46827
const cx = classNames.bind(styles);
function Statistic() {
  return (
    <div className={cx('main-content')}>
      <div className={cx('left-side')}>
          <ChartBox title = {"Moisture"} data={data} opNum={true}/>
          <ChartBox title = {"Temperature"} data={data} opNum={true}/>
          <ChartBox title = {"Light"} data={data} opNum={true}/>
          <ChartBox title = {"Power Consumption"} data={data2} opNum={false}/>
      </div>
      <div className={cx('just-a-big-line')} />
      <div className={cx('right-side')}>
        <div className={cx('statcard-block')}>
          <StatCard title={"Avg Moisture"} value={avgMoisture + "%"} upValue={3} isUp={true} content={faDroplet} isIcon={true} />
          <div className={cx('just-a-line')} />
          <StatCard title={"Avg Light"} value={avgLight} upValue={3} isUp={false} content={faSunPlantWilt} isIcon={true} />
        </div>
        <div className={cx('statcard-block')}>
          <StatCard title={"Electric Consumption"} value={elecConsumption} upValue={3} isUp={true} content={"kwh"} isIcon={false} />
          <div className={cx('just-a-line')} />
          <StatCard title={"Water Consumption"} value={waterConsumption} upValue={3} isUp={false} content={"gal"} isIcon={false} />
        </div>
        <div className={cx('statcard-block')}>
          <StatCard title={"Avg Temperature"} value={avgTemperature} upValue={3} content={faSnowflake} isIcon={true} />

          <div className={cx('just-a-line')} />
          <StatCard title={"Total spend"} value={total +'$'} upValue={3} isUp={true} content={"/month"} isIcon={false} />
        </div>
      </div>
    </div>
  );
}


export default Statistic;
