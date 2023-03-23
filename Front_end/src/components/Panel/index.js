import styles from "./Panel.module.scss";
import classNames from "classnames/bind";
import InfoPanel from "../InfoPanel";
import SettingsPanel from "../SettingsPanel";
import { useState } from "react";

const cx = classNames.bind(styles);

const Panel = ({ infoData }) => {
  const [currentSettings, setCurrentSettings] = useState({ ...infoData });
  const [newSettings, setNewSettings] = useState({...currentSettings})

  const handleSave = (e) => {
    setCurrentSettings({...newSettings})
  };

  return (
    <>
      <div className={cx("content")}>
        <InfoPanel
          className={cx("info-panel")}
          currentSettings={currentSettings}
        />
        <SettingsPanel
          className={cx("settings-panel")}
          newSettings={newSettings}
          setNewSettings={setNewSettings}
        />
      </div>
      <div className={cx("save-button")}>
        <button
          onClick={(e) => {
            alert("Saved changes in " + infoData.meta.name.toLowerCase())
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
