import React, { useEffect, useState, useContext } from 'react';
import StatCard from "../../components/StatCard"
import ChartBox from "../../components/Chart"
import classNames from "classnames/bind";
import styles from "./statistic.module.scss";
import {
  faDroplet,
  faSunPlantWilt,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";
import { search } from "../../apiServices/searchService";
// import { SocketContext } from "../../context/socket";

const cx = classNames.bind(styles);
function Statistic() {
  const Last7Days =()=>{
    const weekDay=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var result = [];
    for (var i=6; i>-1; i--) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push(weekDay[d.getDay()])
    }
    return result
  }
  const last7Days = Last7Days()
  const [moisValue, setMoisValue] = useState([]);
  const [lightValue, setLightValue] = useState([]);
  const [tempValue, setTempValue] = useState([]);
  const [moisCons, setMoisCons] = useState([]);
  const [lightCons, setLightCons] = useState([]);
  const [tempCons, setTempCons] = useState([]);
  const [avgMoisture,setAvgMois] = useState(0);
  const [avgLight,setAvgLight] = useState(0);
  const [avgTemperature,setAvgTemperature] = useState(0);
  const [waterConsumption,setWaterCons] = useState(0);
  const [elecConsumption,setElecCons] = useState(0);
  const [total,setTotal] = useState(0);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        Last7Days()
        const response = await search({
          path: "statistic",
        });
        response.value.forEach((v) => {
          setMoisValue(moisValue=>[...moisValue,v.soilValue])
          setTempValue(tempValue=>[...tempValue,v.tempValue])
          setLightValue(lightValue=>[...lightValue,v.lightValue])
          setAvgMois(avgMoisture=>avgMoisture+v.soilValue)
          setAvgLight(avgLight=>avgLight+v.lightValue)
          setAvgTemperature(avgTemperature=>avgTemperature+v.tempValue)
        });
        setAvgMois(avgMoisture=>Math.round((avgMoisture/7) * 1e2 ) / 1e2)
        setAvgLight(avgLight=>Math.round((avgLight/7) * 1e2 ) / 1e2)
        setAvgTemperature(avgTemperature=>Math.round((avgTemperature/7) * 1e2 ) / 1e2)
        let totalWater =0;
        let totalElec =0;
        response.soilCons.forEach((v) => {
          setMoisCons(moisCons=>[...moisCons,v.amount])
          totalWater+=v.amount
        });
        setWaterCons(totalWater)
        response.tempCons.forEach((v) => {
          setTempCons(tempCons=>[...tempCons,v.amount])
          totalElec +=v.amount
        });
        response.lightCons.forEach((v) => {
          setLightCons(lightCons=>[...lightCons,v.amount])
          totalElec +=v.amount
        });
        setElecCons(totalElec)
        setTotal(Math.round((14400*0.00454609*totalWater + 3000*totalElec)/25000))
      } catch (error) {
        console.log("error");
      }
    };
    fetchAPI();
  }, []);
  // const socket = useContext(SocketContext);
  // socket.on("update_condition", (value) => setConditionValue(value));

  // socket.on("update_all_settings", (value) => {
  //   console.log("This is all settings for update!");
  //   setConditionResult([value[0], value[1], value[2]]);
  // });

  // const [condition1Result, setCondition1Result] = useState([]);
  // const handle =() =>{
  //   console.log('success button')
  //   setCondition1Result([0, 0, 55, 0, 0, 0, 0])
  // }
  const data = [{
    labels: last7Days,
    datasets: [
      {
        label: "Moisture",
        // yAxisID: 'moisture',
        data: moisValue,
        fill: false,
        borderColor: 'rgba(52, 122, 226, 1)',
        tension: 0.2,
        yAxisID: 'y',
      },
      {
        label: "Consumption",
        // yAxisID: 'consumption',
        data: moisCons,
        fill: false,
        borderColor: 'rgba(255, 149, 0, 1)',
        tension: 0.2,
        yAxisID: 'y1',
      },
    ]
  },
  {
    labels: last7Days,
    datasets: [
      {
        label: "Temperature",
        // yAxisID: 'moisture',
        data: tempValue,
        fill: false,
        borderColor: 'rgba(52, 122, 226, 1)',
        tension: 0.2,
        yAxisID: 'y',
      },
      {
        label: "Consumption",
        // yAxisID: 'consumption',
        data: tempCons,
        fill: false,
        borderColor: 'rgba(255, 149, 0, 1)',
        tension: 0.2,
        yAxisID: 'y1',
      },
    ]
  },
  {
    labels: last7Days,
    datasets: [
      {
        label: "Light",
        // yAxisID: 'moisture',
        data: lightValue,
        fill: false,
        borderColor: 'rgba(52, 122, 226, 1)',
        tension: 0.2,
        yAxisID: 'y',
      },
      {
        label: "Consumption",
        // yAxisID: 'consumption',
        data: lightCons,
        fill: false,
        borderColor: 'rgba(255, 149, 0, 1)',
        tension: 0.2,
        yAxisID: 'y1',
      },
    ]
  }]
  const data2 = {
    labels: last7Days,
    datasets: [
      {
        label: "Consumption",
        // yAxisID: 'consumption',
        data: lightCons,
        fill: false,
        borderColor: 'rgba(255, 149, 0, 1)',
        tension: 0.2,
        yAxisID: 'y',
      },
    ]
  }
  return (
    <div className={cx('main-content')}>
      <div className={cx('left-side')}>
          <ChartBox title = {"Moisture"} data={data[0]} opNum={true}/>
          <ChartBox title = {"Temperature"} data={data[1]} opNum={true}/>
          <ChartBox title = {"Light"} data={data[2]} opNum={true}/>
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
