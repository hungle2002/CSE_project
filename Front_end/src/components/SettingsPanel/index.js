import styles from "./SettingsPanel.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const SettingsPanel = ({ newSettings, setNewSettings }) => {
  const getMeasurementUnit = () => {
    return newSettings.meta.unit === "oC" ? (
      <span>
        <sup>o</sup>C
      </span>
    ) : newSettings.meta.unit === "W/m2" ? (
      <span>
        W/m<sup>2</sup>
      </span>
    ) : (
      <span>%</span>
    );
  };

  const conditionalTexts = {
    title:
      newSettings.mode === 1
        ? "Automatic"
        : newSettings.mode === 2
        ? "Scheduled"
        : "Manual",
    contentClassname:
      newSettings.mode === 2 ? "sched-content" : "range-content",
    rangeMinText:
      newSettings.mode === 1
        ? "Keep between"
        : newSettings.mode === 2
        ? "Turn on from"
        : "Safe from",
    rangeMaxText: newSettings.mode === 1 ? "and" : "to",
    minInputClassname:
      newSettings.mode === 2 ? "sched-start-input" : "ideal-min-input",
    maxInputClassname:
      newSettings.mode === 2 ? "sched-end-input" : "ideal-max-input",
  };

  const inputElements = {
    inputMin:
      newSettings.mode === 2 ? (
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
            id={newSettings.meta.name + "_range-input-min"}
            value={
              newSettings.mode === 1
                ? newSettings.autoMin
                : newSettings.manualMin
            }
            onChange={(e) =>
              setNewSettings(
                newSettings.mode === 1
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
          <label htmlFor={newSettings.meta.name + "_range-input-min"}>
            {getMeasurementUnit()}
          </label>
        </>
      ),
    inputMax:
      newSettings.mode === 2 ? (
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
            id={newSettings.meta.name + "_range-input-max"}
            value={
              newSettings.mode === 1
                ? newSettings.autoMax
                : newSettings.manualMax
            }
            onChange={(e) =>
              setNewSettings(
                newSettings.mode === 1
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
          <label htmlFor={newSettings.meta.name + "_range-input-max"}>
            {getMeasurementUnit()}
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
          {[1, 2, 3].map((i) => (
            <div className={cx("mode-radio")} key={i}>
              <label htmlFor={newSettings.meta.name + `_mode-radio-input-${i}`}>
                {i === 1 ? "Automatic" : i === 2 ? "Scheduled" : "Manual"}
              </label>
              <input
                type="radio"
                name={newSettings.meta.name + "mode"}
                id={newSettings.meta.name + `_mode-radio-input-${i}`}
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
              {[1, 2, 3].map((i) => (
                <div className={cx("safe-radio")} key={i}>
                  <label htmlFor={newSettings.meta.name + `_safe-radio-${i}`}>
                    {i === 1 ? "Ignore" : i === 2 ? "Alert" : "Take action"}
                  </label>
                  <input
                    type="radio"
                    id={newSettings.meta.name + `_safe-radio-${i}`}
                    value={i}
                    checked={newSettings.safeAction === i}
                    name={newSettings.meta.name + "safe"}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={cx("safe-content-right")}>
            <div className={cx("safe-lower")}>
              <label htmlFor={newSettings.meta.name + "_safe-lower"}>
                Lower limit
              </label>
              <input
                type="number"
                id={newSettings.meta.name + "_safe-lower"}
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
              <label htmlFor={newSettings.meta.name + "_safe-upper"}>
                Upper limit
              </label>
              <input
                type="number"
                id={newSettings.meta.name + "_safe-upper"}
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
