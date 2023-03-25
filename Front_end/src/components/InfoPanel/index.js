import styles from "./InfoPanel.module.scss";
import classNames from "classnames/bind";
import {
  faThermometer0,
  faDroplet,
  faSun,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const InfoPanel = ({ currentSettings }) => {
  const getMeasurementUnit = () => {
    return currentSettings.meta.unit === "oC" ? (
      <span>
        <sup>o</sup>C
      </span>
    ) : currentSettings.meta.unit === "W/m2" ? (
      <span>
        W/m<sup>2</sup>
      </span>
    ) : (
      <span>%</span>
    );
  };
  var icon = undefined;
  var modeText = undefined;
  var mode = undefined;
  var modeRange = undefined;
  var backgroundColor = undefined;
  var statusText = undefined;
  switch (currentSettings.meta.name) {
    case "Temperature":
      icon = faThermometer0;
      backgroundColor = "#D0EFF5";
      break;
    case "Lighting":
      icon = faSun;
      backgroundColor = "#D1EED8";
      break;
    case "Soil moisture":
      icon = faDroplet;
      backgroundColor = "#F0F6D2";
      break;
    default:
      icon = faCross;
      backgroundColor = "#FFFFFF";
      break;
  }
  switch (currentSettings.mode) {
    case 1:
      mode = "AUTOMATIC";
      modeText = "Keep between";
      modeRange = `${currentSettings.autoMin} - ${currentSettings.autoMax}`;
      break;
    case 2:
      mode = "SCHEDULED";
      modeText = "On from";
      modeRange = currentSettings.schedStart + " - " + currentSettings.schedEnd;
      break;
    case 3:
      mode = "MANUAL";
      modeText = `${
        currentSettings.safeAction === 1
          ? "Ignore"
          : currentSettings.safeAction === 2
          ? "Alert"
          : "Take action"
      } when outside`;
      modeRange = `${currentSettings.manualMin} - ${currentSettings.manualMax}`;
      break;
    default:
      mode = "Null";
      modeText = "null";
      modeRange = "null - null";
      break;
  }
  if (currentSettings.status >= currentSettings.autoMin && currentSettings.status <= currentSettings.autoMax) {
    statusText = "Good";
  }
  else if (currentSettings.status < currentSettings.autoMin) {
    statusText = "Low";
  }
  else {
    statusText = "High";
  }

  return (
    <div
      className={cx("container")}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={cx("left")}>
        <div className={cx("left-top")}>
          <FontAwesomeIcon
            className={cx("left-top-icon")}
            icon={icon}
            size="2x"
          />
          <p className={cx("left-top-text")}>
            {currentSettings.status}{" "}
            {getMeasurementUnit()}
          </p>
        </div>
        <div className={cx("left-bottom")}>
          <p className={cx("left-bottom-text")}>{currentSettings.meta.name}</p>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("right-top")}>
          <p className={cx("right-top-mode")}>{mode}</p>
          <p className={cx("right-top-text")}>{modeText}</p>
          <p className={cx("right-top-range")}>
            {modeRange}{" "}
            {currentSettings.mode !== 2 ? getMeasurementUnit() : null}
          </p>
        </div>
        <div className={cx("right-bottom", `right-bottom-${statusText.toLowerCase()}`)}>{statusText}</div>
      </div>
    </div>
  );
};

export default InfoPanel;
