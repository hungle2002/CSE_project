import styles from "./Panel.module.scss";
import classNames from "classnames/bind";
import InfoPanel from "../InfoPanel";
import SettingsPanel from "../SettingsPanel";

const cx = classNames.bind(styles);

const Panel = ({ infoData, settings, setSettings }) => {
  const handleSave = () => {
    return;
  };

  return (
    <>
      <div className={cx("content")}>
        <InfoPanel className={cx("info-panel")} infoData={infoData} />
        <SettingsPanel
          className={cx("settings-panel")}
          infoData={infoData}
          settings={settings}
          setSettings={setSettings}
        />
      </div>
      <div className={cx("save-button")}>
        <button onClick={(e) => alert("Saved changes in " + infoData.meta.name.toLowerCase())}>Save</button>
      </div>
    </>
  );
};

export default Panel;
