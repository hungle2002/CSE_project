import styles from "./Mode.module.scss";
import classNames from "classnames/bind";
import Panel from "../../components/Panel";
import { useEffect, useRef, useState } from "react";
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
      {
        temp: 25,
        weather: "Sunny",
      },
      {
        temp: 23,
        weather: "Cloudy",
      },
      {
        temp: 25,
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
        {["temperature", "lighting", "soilMoisture"].map(type => (
          <div className={cx("panel")} key={type}>
            <Panel
              type={type}
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
