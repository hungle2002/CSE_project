import styles from "./InfoPanel.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

const InfoPanel = ({ currentSettings, type, displayInfo }) => {

  const {settingType, measurementUnit, icon, modeText, mode, modeRange, backgroundColor, statusText} = displayInfo
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
          <div className={cx("left-top-text")}>
            <p className={cx("left-top-value")}>
              {currentSettings.status}
            </p>
            <p className={cx("measurement-unit")}>{measurementUnit}</p>
          </div>
        </div>
        <div className={cx("left-bottom")}>
          <p className={cx("left-bottom-text")}>{settingType}</p>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("right-top")}>
          <p className={cx("right-top-mode")}>{mode}</p>
          <p className={cx("right-top-text")}>{modeText}</p>
          <p className={cx("right-top-range")}>
            {modeRange}{" "}
            {currentSettings.mode !== 1 ? measurementUnit : null}
          </p>
        </div>
        <div className={cx("right-bottom", `right-bottom-${statusText.toLowerCase()}`)}>{statusText}</div>
      </div>
    </div>
  );
};

export default InfoPanel;
