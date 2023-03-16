import React, { useState } from 'react';
import StatCard from "../../components/StatCard"
import ChartBox from "../../components/Chart"
import classNames from "classnames/bind";
import styles from "./statistic.module.scss";
import images from "../../assets/images";

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
        <div className={cx('chart-box')}>
          <h1>Moisture Analytics</h1>
          <p>Realtime - last 7 days</p>
          <ChartBox />
        </div>
        <div className={cx('chart-box')}>
          <h1>Temperature Analytics</h1>
          <p>Realtime - last 7 days</p>
          <ChartBox />
        </div>
      </div>
      <div className={cx('just-a-big-line')} />
      <div className={cx('right-side')}>
        <div className={cx('statcard-block')}>
          <StatCard title={"Avg Moisture"} value={avgMoisture + "%"} upValue={3} isUp={true} image={images.hydrometer} />
          <div className={cx('just-a-line')} />
          <StatCard title={"Avg Light"} value={avgLight} upValue={3} isUp={false} image={images.hydrometer} />
        </div>
        <div className={cx('statcard-block')}>
          <StatCard title={"Avg Temperature"} value={avgTemperature} upValue={3} isUp={false} image={images.hydrometer} />
          <div className={cx('just-a-line')} />
          <StatCard title={"Water Consumption"} value={waterConsumption} upValue={3} isUp={false} image={images.hydrometer} />
        </div>
        <div className={cx('statcard-block')}>
          <StatCard title={"Electric Consumption"} value={elecConsumption} upValue={3} isUp={true} image={images.hydrometer} />
          <div className={cx('just-a-line')} />
          <StatCard title={"Total spend"} value={total} upValue={3} isUp={true} image={images.hydrometer} />
        </div>
      </div>
    </div>
  );
}


export default Statistic;
