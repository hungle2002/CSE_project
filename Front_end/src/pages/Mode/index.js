import styles from "./Mode.module.scss";
import classNames from "classnames/bind";
import Panel from "../../components/Panel";
import { useEffect, useRef, useState } from "react";
import images from "../../assets/images";
import WeatherBar from "../../components/WeatherBar";

const cx = classNames.bind(styles);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Profile() {
  const nullData = {
    meta: {
      name: "Null",
      unit: "null",
    },
    mode: 0,
    safeAction: 0,
    status: 0,
    autoMin: 0,
    autoMax: 0,
    schedStart: "00:00",
    schedEnd: "10:00",
    safeMin: 0,
    safeMax: 0,
    manualMin: 0,
    manualMax: 0
  };
  const temperatureData = {
    meta: {
      name: "Temperature",
      unit: "oC",
    },
    mode: 1,
    safeAction: 1,
    status: 27,
    autoMin: 17,
    autoMax: 30,
    schedStart: "06:00",
    schedEnd: "18:00",
    safeMin: 15,
    safeMax: 32,
    manualMin: 16,
    manualMax: 31
  };
  const lightingData = {
    meta: {
      name: "Lighting",
      unit: "W/m2",
    },
    mode: 2,
    safeAction: 2,
    status: 150,
    autoMin: 100,
    autoMax: 200,
    schedStart: "06:00",
    schedEnd: "18:00",
    safeMin: 80,
    safeMax: 220,
    manualMin: 90,
    manualMax: 210
  };
  const soilMoistureData = {
    meta: {
      name: "Soil moisture",
      unit: "%",
    },
    mode: 3,
    safeAction: 3,
    status: 56,
    autoMin: 50,
    autoMax: 70,
    schedStart: "06:00",
    schedEnd: "18:00",
    safeMin: 45,
    safeMax: 75,
    manualMin: 47,
    manualMax: 73
  };
  const weatherData = {
    meta: {
      location: "Ho Chi Minh City",
      date: `${days[new Date().getDay()]}, ${new Date().getDate()} ${
        months[new Date().getMonth()]
      } ${new Date().getFullYear()}`,
    },
    today: {
      temp: 25,
      feelsLike: 27,
      weather: "Sunny",
    },
    others: [
      {
        temp: 28,
        weather: "Sunny",
      },
      {
        temp: 24,
        weather: "Cloudy",
      },
      {
        temp: 23,
        weather: "Rainy",
      },
      {
        temp: 22,
        weather: "Rainy",
      },
    ],
  };

  const [showRightbar, setShowRightbar] = useState(true);

  const rightbarRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    
  }, []);

  useEffect(() => {
    if (!showRightbar) {
      rightbarRef.current.style.display = "none";
      rightbarRef.current.style.width = "0%";
      contentRef.current.style.width = "98%";
    } else {
      rightbarRef.current.style.display = "flex";
      rightbarRef.current.style.width = "23%";
      contentRef.current.style.width = "75%";
    }
  }, [showRightbar]);

  return (
    <div className={cx("container")}>
      <div className={cx("content")} ref={contentRef}>
        {[temperatureData, lightingData, soilMoistureData].map((data) => (
          <div className={cx("panel")} key={data.meta.name}>
            <Panel
              infoData={data}
            />
          </div>
        ))}
      </div>
      <div className={cx("rightbar-button-container")}>
        <div className={cx("rightbar-line")}></div>
        <button
          onClick={() => setShowRightbar(!showRightbar)}
          className={cx("rightbar-button")}
        >
          {showRightbar ? ">" : "<"}
        </button>
      </div>
      <WeatherBar rightbarRef={rightbarRef} weatherData={weatherData} />
    </div>
  );
}

export default Profile;
