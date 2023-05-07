import styles from "./SettingsPanel.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SettingsPanel = ({ newSettings, setNewSettings, type, displayInfo }) => {
  const { settingType, measurementUnit } = displayInfo
  const conditionalTexts = {
    title:
      newSettings.mode === 0
        ? "Automatic"
        : newSettings.mode === 1
        ? "Scheduled"
        : "Manual",
    contentClassname:
      newSettings.mode === 1 ? "sched-content" : "range-content",
    rangeMinText:
      newSettings.mode === 0
        ? "Keep between"
        : newSettings.mode === 1
        ? "Turn on from"
        : "Safe from",
    rangeMaxText: newSettings.mode === 0 ? "and" : "to",
    minInputClassname:
      newSettings.mode === 1 ? "sched-start-input" : "ideal-min-input",
    maxInputClassname:
      newSettings.mode === 1 ? "sched-end-input" : "ideal-max-input",
  };

  const inputElements = {
    inputMin:
      newSettings.mode === 1 ? (
        <input
          type="time"
          value={newSettings.schedStart}
          onChange={(e) =>
            setNewSettings({
              ...newSettings,
              schedStart: e.target.value,
            })
          }
        />
      ) : (
        <>
          <input
            type="number"
            id={settingType + "_range-input-min"}
            value={
              newSettings.mode === 0
                ? newSettings.autoMin
                : newSettings.manualMin
            }
            onChange={(e) =>
              setNewSettings(
                newSettings.mode === 0
                  ? {
                      ...newSettings,
                      autoMin:
                        e.target.value === "-"
                          ? "-"
                          : parseInt(e.target.value || "0"),
                    }
                  : {
                      ...newSettings,
                      manualMin:
                        e.target.value === "-"
                          ? "-"
                          : parseInt(e.target.value || "0"),
                    }
              )
            }
          />
          <label htmlFor={settingType + "_range-input-min"}>
            {measurementUnit}
          </label>
        </>
      ),
    inputMax:
      newSettings.mode === 1 ? (
        <input
          type="time"
          value={newSettings.schedEnd}
          onChange={(e) =>
            setNewSettings({
              ...newSettings,
              schedEnd: e.target.value,
            })
          }
        />
      ) : (
        <>
          <input
            type="number"
            id={settingType + "_range-input-max"}
            value={
              newSettings.mode === 0
                ? newSettings.autoMax
                : newSettings.manualMax
            }
            onChange={(e) =>
              setNewSettings(
                newSettings.mode === 0
                  ? {
                      ...newSettings,
                      autoMax:
                        e.target.value === "-"
                          ? "-"
                          : parseInt(e.target.value || "0"),
                    }
                  : {
                      ...newSettings,
                      manualMax:
                        e.target.value === "-"
                          ? "-"
                          : parseInt(e.target.value || "0"),
                    }
              )
            }
          />
          <label htmlFor={settingType + "_range-input-max"}>
            {measurementUnit}
          </label>
        </>
      ),
  };

  return (
    <div className={cx("container")}>
      <div className={cx("mode")}>
        <div className={cx("mode-title")}>
          <p className={cx("mode-title-text")}>Mode</p>
        </div>
        <div
          className={cx("mode-content")}
          onChange={(e) => {
            setNewSettings({
              ...newSettings,
              mode: parseInt(e.target.value),
            });
          }}
        >
          {[0, 1, 2].map((i) => (
            <div className={cx("mode-radio")} key={i}>
              <label htmlFor={settingType + `_mode-radio-input-${i}`}>
                {i === 0 ? "Automatic" : i === 1 ? "Scheduled" : "Manual"}
              </label>
              <input
                type="radio"
                name={settingType + "mode"}
                id={settingType + `_mode-radio-input-${i}`}
                value={i}
                checked={newSettings.mode === i}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={cx("range")}>
        <div className={cx("range-title")}>
          <p className={cx("range-title-text")}>{conditionalTexts.title}</p>
        </div>
        <div className={cx(conditionalTexts.contentClassname)}>
          <div className={cx("range-min")}>
            <p className={cx("range-min-text")}>
              {conditionalTexts.rangeMinText}
            </p>
            <div className={cx(conditionalTexts.minInputClassname)}>
              {inputElements.inputMin}
            </div>
          </div>
          <div className={cx("range-max")}>
            <p className={cx("range-max-text")}>
              {conditionalTexts.rangeMaxText}
            </p>
            <div className={cx(conditionalTexts.maxInputClassname)}>
              {inputElements.inputMax}
            </div>
          </div>
        </div>
      </div>
      <div className={cx("safe")}>
        <div className={cx("safe-title")}>
          <p className={cx("safe-title-text")}>Safe Mode</p>
        </div>
        <div className={cx("safe-content")}>
          <div className={cx("safe-content-left")}>
            <p className={cx("safe-left-text")}>Action</p>
            <div
              className={cx("safe-left-radios")}
              onChange={(e) =>
                setNewSettings({
                  ...newSettings,
                  safeAction: parseInt(e.target.value),
                })
              }
            >
              {[0, 1, 2].map((i) => (
                <div className={cx("safe-radio")} key={i}>
                  <label htmlFor={settingType + `_safe-radio-${i}`}>
                    {i === 0 ? "Ignore" : i === 1 ? "Alert" : "Take action"}
                  </label>
                  <input
                    type="radio"
                    id={settingType + `_safe-radio-${i}`}
                    value={i}
                    checked={newSettings.safeAction === i}
                    name={settingType + "safe"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={cx("safe-content-right")}>
            <div className={cx("safe-lower")}>
              <label htmlFor={settingType + "_safe-lower"}>
                Lower limit
              </label>
              <input
                type="number"
                id={settingType + "_safe-lower"}
                value={newSettings.safeMin}
                onChange={(e) =>
                  setNewSettings({
                    ...newSettings,
                    safeMin:
                      e.target.value === "-"
                        ? "-"
                        : parseInt(e.target.value || "0"),
                  })
                }
              />
            </div>
            <div className={cx("safe-upper")}>
              <label htmlFor={settingType + "_safe-upper"}>
                Upper limit
              </label>
              <input
                type="number"
                id={settingType + "_safe-upper"}
                value={newSettings.safeMax}
                onChange={(e) =>
                  setNewSettings({
                    ...newSettings,
                    safeMax:
                      e.target.value === "-"
                        ? "-"
                        : parseInt(e.target.value || "0"),
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
