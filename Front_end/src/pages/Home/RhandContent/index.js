import classNames from "classnames/bind";
import styles from "./RhandContent.module.scss";
import images from "../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconAndNum from "../../../components/IconAndNum";
import {
  faCloudSun,
  faDroplet,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";
import config from "../../../config";
import React from "react";

const cx = classNames.bind(styles);

function RhandConent() {
  const conditonItem = [
    {
      icon: <FontAwesomeIcon icon={faTemperatureThreeQuarters} />,
      color: "#5EE85C",
      type: config.conditions.temperature.unit,
      num: 24,
    },
    {
      icon: <FontAwesomeIcon icon={faCloudSun} />,
      color: "#E9DA58",
      type: config.conditions.light.unit,
      num: 171,
    },
    {
      icon: <FontAwesomeIcon icon={faDroplet} />,
      color: "#5BA5EA",
      type: config.conditions.moisture.unit,
      num: 72,
    },
  ];

  return (
    <div className={cx("wrapper")}>
      <div className={cx("border-div")}>
        <div className={cx("close-button")}>
          <p>&gt;</p>
        </div>
        <div className={cx("row")}></div>
      </div>

      <div className={cx("inner")}>
        <img className={cx("plant-image")} src={images.wheat} alt="Wheat" />
        <div className={cx("plant-condition")}>
          {conditonItem.map((item, index) => (
            <IconAndNum
              key={index}
              icon={item.icon}
              chooseColor={item.color}
              num={item.num}
              type={item.type}
              small
            />
          ))}
        </div>
        <div className={cx("plant-information")}>
          <h1 className={cx("plant-name")}>Wheat</h1>
          <p className={cx("plant-description")}>
            Raw wheat can be ground into flour or using hard durum into
            semolina; germinated and dried creating malt; crushed or cut into
            cracked wheat; parboiled ( or steamed), dried, crushed and
            de-branned into bulgur also known as groats.
          </p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(RhandConent);
