import styles from "./Panel.module.scss";
import classNames from "classnames/bind";
import InfoPanel from "../InfoPanel";
import { search, update } from "../../apiServices/searchService";
import SettingsPanel from "../SettingsPanel";
import {
  faThermometer0,
  faDroplet,
  faSun,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import config from "../../config";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/socket";

const cx = classNames.bind(styles);

const Panel = ({ type }) => {

  const [currentSettings, setCurrentSettings] = useState({});
  const [newSettings, setNewSettings] = useState({})

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({
          path: "condition",
        });
        const localSettings = {
          ...response.condition[type === "temperature" ? 0 : (
            type === "lighting" ? 1 : 2
          )],
          status: type === "temperature" ? response.value.tempValue : (
            type === "lighting" ? response.value.lightValue : response.value.soilValue
          )
        }
        setCurrentSettings({...localSettings})
        setNewSettings({...localSettings})
      } catch (error) {
        console.log("error");
      }
    };
    fetchAPI();
  }, [])

  const socket = useContext(SocketContext);
  socket.on("update_condition", (value) => {
    const localSettings = {
      ...currentSettings,
      status: type === "temperature" ? value[0] : (
        type === "lighting" ? value[1] : value[2]
      )
    }
    setCurrentSettings(localSettings)
  });

  socket.on("update_all_settings", (value) => {
    const tmp =type === "temperature" ? value[0] : (
      type === "lighting" ? value[1] : value[2]
    ) ;
    // save previous status of condition values
      tmp["status"] = currentSettings["status"]
    setCurrentSettings(tmp)
    setNewSettings(tmp)
  });

  var settingType = undefined;
  var measurementUnit = undefined;
  var icon = undefined;
  var modeText = undefined;
  var mode = undefined;
  var modeRange = undefined;
  var backgroundColor = undefined;
  var statusText = undefined;
  switch (type) {
    case "temperature":
      icon = faThermometer0;
      backgroundColor = "#D0EFF5";
      settingType = "Temperature"
      measurementUnit = config.conditions.temperature.unit;
      break;
    case "lighting":
      icon = faSun;
      backgroundColor = "#D1EED8";
      settingType = "Lighting"
      measurementUnit = config.conditions.light.unit;
      break;
    case "soilMoisture":
      icon = faDroplet;
      backgroundColor = "#F0F6D2";
      settingType = "Soil moisture"
      measurementUnit = config.conditions.moisture.unit;
      break;
    default:
      icon = faCross;
      backgroundColor = "#FFFFFF";
      break;
  }
  switch (currentSettings.mode) {
    case 0:
      mode = "AUTOMATIC";
      modeText = "Keep between";
      modeRange = `${currentSettings.autoMin} - ${currentSettings.autoMax}`;
      if (currentSettings.status >= currentSettings.autoMin && currentSettings.status <= currentSettings.autoMax) {
        statusText = "Good";
      }
      else if (currentSettings.status < currentSettings.autoMin) {
        statusText = "Low";
      }
      else {
        statusText = "High";
      }
      break;
    case 1:
      mode = "SCHEDULED";
      modeText = "On from";
      modeRange = currentSettings.schedStart + " - " + currentSettings.schedEnd;
      if (currentSettings.status >= currentSettings.safeMin && currentSettings.status <= currentSettings.safeMax) {
        statusText = "Good";
      }
      else if (currentSettings.status < currentSettings.safeMin) {
        statusText = "Low";
      }
      else {
        statusText = "High";
      }
      break;
    case 2:
      mode = "MANUAL";
      modeText = `${
        currentSettings.safeAction === 0
          ? "Ignore"
          : currentSettings.safeAction === 1
          ? "Alert"
          : "Take action"
      } when outside`;
      modeRange = `${currentSettings.manualMin} - ${currentSettings.manualMax}`;
      if (currentSettings.status >= currentSettings.manualMin && currentSettings.status <= currentSettings.manualMax) {
        statusText = "Good";
      }
      else if (currentSettings.status < currentSettings.manualMin) {
        statusText = "Low";
      }
      else {
        statusText = "High";
      }
      break;
    default:
      if (currentSettings.status >= currentSettings.autoMin && currentSettings.status <= currentSettings.autoMax) {
        statusText = "Good";
      }
      else if (currentSettings.status < currentSettings.autoMin) {
        statusText = "Low";
      }
      else {
        statusText = "High";
      }
      break;
  }

  const displayInfo = {
    settingType, measurementUnit, icon, modeText, mode, modeRange, backgroundColor, statusText
  }

  const handleSave = (e) => {
    setCurrentSettings({...newSettings})
    console.log(newSettings);
    const updateAPI = async () => {
      try {
        await update({
          path: `settings/${type}`,
          data: newSettings
        })
      } catch (error) {
        console.log("error");
      }
    }
    updateAPI();
  };

  return (
    <>
      <div className={cx("content")}>
        <InfoPanel
          className={cx("info-panel")}
          currentSettings={currentSettings}
          type={type}
          displayInfo={displayInfo}
        />
        <SettingsPanel
          className={cx("settings-panel")}
          newSettings={newSettings}
          setNewSettings={setNewSettings}
          type={type}
          displayInfo={displayInfo}
        />
      </div>
      <div className={cx("save-button")}>
        <button
          onClick={(e) => {
            handleSave(e)
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Panel;
