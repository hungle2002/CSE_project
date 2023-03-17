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

const InfoPanel = ({ infoData }) => {
  var icon = undefined;
  var modeText = undefined;
  var mode = undefined;
  var modeRange = undefined;
  var backgroundColor = undefined;
  switch (infoData.meta.name) {
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
  switch (infoData.mode) {
    case 1:
      mode = "Automatic";
      modeText = "Keep between";
      modeRange = `${infoData.autoMin} - ${infoData.autoMax}`;
      break;
    case 2:
      mode = "Scheduled";
      modeText = "On from";
      modeRange = infoData.schedStart + " - " + infoData.schedEnd;
      break;
    case 3:
      mode = "Manual";
      modeText = `${infoData.safeAction === 1 ? "Ignore" : (infoData.safeAction === 2 ? "Alert" : "Take action")} when outside`;
      modeRange = `${infoData.safeMin} - ${infoData.safeMax}`;
      break;
    default:
      mode = "Null";
      modeText = "null";
      modeRange = "null - null";
      break;
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
            {infoData.status}{" "}
            {infoData.meta.unit === "oC" ? (
              <span>
                <sup>o</sup>C
              </span>
            ) : infoData.meta.unit === "W/m2" ? (
              <span>
                W/m<sup>2</sup>
              </span>
            ) : (
              "%"
            )}
          </p>
        </div>
        <div className={cx("left-bottom")}>
          <p className={cx("left-bottom-text")}>{infoData.meta.name}</p>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("right-top")}>
          <p className={cx("right-top-mode")}>{mode}</p>
          <p className={cx("right-top-text")}>{modeText}</p>
          <p className={cx("right-top-range")}>
            {modeRange}{" "}
            {infoData.meta.unit === "oC" ? (
              <span>
                <sup>o</sup>C
              </span>
            ) : infoData.meta.unit === "W/m2" ? (
              <span>
                W/m<sup>2</sup>
              </span>
            ) : (
              "%"
            )}
          </p>
        </div>
        <div className={cx("right-bottom")}>Good</div>
      </div>
    </div>
  );
};

export default InfoPanel;
