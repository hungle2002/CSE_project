import styles from "./WeatherBar.module.scss";
import classNames from "classnames/bind";

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

const WeatherBar = ({ rightbarRef, weatherData }) => {
  return (
    <div className={cx("container")} ref={rightbarRef}>
      <div
        className={cx(
          `today-${weatherData.today.weather.toLowerCase()}`,
          "today"
        )}
      >
        <div className={cx("today-top")}>
          <div className={cx("today-top-content")}>
            <p className={cx("today-top-content-temp")}>
              {weatherData.today.temp} <sup>o</sup>
            </p>
            <p className={cx("today-top-content-feel")}>
              {`Feels like ${weatherData.today.feelsLike}`} <sup>o</sup>
            </p>
          </div>
        </div>
        <div className={cx("today-bottom")}>
          <div className={cx("today-bottom-location")}>
            <p className={cx("today-location-text")}>Current location</p>
            <p className={cx("today-location")}>{weatherData.meta.location}</p>
          </div>
          <div className={cx("today-bottom-info")}>
            <p className={cx("today-info-weather")}>
              {weatherData.today.weather}
            </p>
            <p className={cx("today-info-date")}>{weatherData.meta.date}</p>
          </div>
        </div>
      </div>
      <div className={cx("other-days-weather-section")}>
        <div className={cx("rightbar-text-container")}>
          <p className={cx("rightbar-text")}>Weekly</p>
        </div>
        <div className={cx("other-days-weather")}>
          {weatherData.others.map((data, index) => (
            <div
              className={cx("other-day", `other-day-${data.weather.toLowerCase()}`)}
              key={String(index) + data.weather}
            >
              <div className={cx("other-day-left")}>
                <p className={cx("other-day-day")}>
                  {days[(new Date().getDay() + index + 1) % 7]}
                </p>
                <p className={cx("other-day-weather")}>{data.weather}</p>
              </div>
              <div className={cx("other-day-right")}>
                <p className={cx("other-day-temp")}>
                  {data.temp} <sup>o</sup>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherBar;
