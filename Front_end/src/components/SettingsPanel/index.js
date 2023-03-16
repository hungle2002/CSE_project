import styles from "./SettingsPanel.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const SettingsPanel = ({ infoData, settings, setSettings }) => {

  const [newSettings, setNewSettings] = useState({});

  useEffect(() => {
    setNewSettings({ settings });
  }, [])

  return (
    <div className={cx("container")}>
      <div className={cx("mode")}>
        <div className={cx("mode-title")}>
          <p className={cx("mode-title-text")}>Mode</p>
        </div>
        <div className={cx("mode-content")} onChange={(e) => alert(e.target.value)}>
          <div className={cx("mode-radio")}>
            <label htmlFor={infoData.meta.name + "_mode-radio-input-1"}>Automatic</label>
            {infoData.mode === 1 ? 
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-1"} value={1} checked/> :
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-1"} value={1}/>}
          </div>
          <div className={cx("mode-radio")}>
            <label htmlFor={infoData.meta.name + "_mode-radio-input-2"}>Scheduled</label>
            {infoData.mode === 2 ? 
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-2"} value={2} checked/> :
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-2"} value={2}/>}
          </div>
          <div className={cx("mode-radio")}>
            <label htmlFor={infoData.meta.name + "_mode-radio-input-3"}>Manual</label>
            {infoData.mode === 3 ? 
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-3"} value={3} checked/> :
              <input type="radio" name={infoData.meta.name + "mode"} id={infoData.meta.name + "_mode-radio-input-3"} value={3}/>}
          </div>
        </div>
      </div>
      {infoData.mode === 1 ? <div className={cx("range")}>
        <div className={cx("range-title")}>
          <p className={cx("range-title-text")}>Automatic</p>
        </div>
        <div className={cx("range-content")}>
          <div className={cx("range-min")}>
            <p className={cx("range-min-text")}>Keep between</p>
            <div className={cx("ideal-min-input")}>
              <input type="text" id={infoData.meta.name + "_range-input-min"} value={infoData.autoMin} />
              <label htmlFor={infoData.meta.name + "_range-input-min"}>{infoData.meta.unit === "oC" ? <span><sup>o</sup>C</span> : <span>W/m<sup>2</sup></span>}</label>
            </div>
          </div>
          <div className={cx("range-max")}>
            <p className={cx("range-max-text")}>and</p>
            <div className={cx("ideal-max-input")}>
              <input type="text" id={infoData.meta.name + "_range-input-max"} value={infoData.autoMax} />
              <label htmlFor={infoData.meta.name + "_range-input-max"}>{infoData.meta.unit === "oC" ? <span><sup>o</sup>C</span> : <span>W/m<sup>2</sup></span>}</label>
            </div>
          </div>
        </div>
      </div> : (infoData.mode === 2 ? <div className={cx("range")}>
        <div className={cx("range-title")}>
          <p className={cx("range-title-text")}>Scheduled</p>
        </div>
        <div className={cx("sched-content")}>
          <div className={cx("range-min")}>
            <p className={cx("range-min-text")}>Turn on from</p>
            <div className={cx("sched-start-input")}>
              <input type="text" value={infoData.schedStart} />
            </div>
          </div>
          <div className={cx("range-max")}>
            <p className={cx("range-max-text")}>to</p>
            <div className={cx("sched-end-input")}>
              <input type="text" value={infoData.schedEnd} />
            </div>
          </div>
        </div>
      </div> : (    // this part should not be present when on manual mode
        <div className={cx("range")}>
        <div className={cx("range-title")}>
          <p className={cx("range-title-text")}>Chưa xong</p>
        </div>
        <div className={cx("range-content")}>
          <div className={cx("range-min")}>
            <p className={cx("range-min-text")}>Alert when outside</p>
            <div className={cx("ideal-min-input")}>
              <input type="text" id={infoData.meta.name + "_range-input-min"} value={infoData.autoMin} />
              <label htmlFor={infoData.meta.name + "_range-input-min"}>{infoData.meta.unit === "oC" ? <span><sup>o</sup>C</span> : <span>W/m<sup>2</sup></span>}</label>
            </div>
          </div>
          <div className={cx("range-max")}>
            <p className={cx("range-max-text")}>to</p>
            <div className={cx("ideal-max-input")}>
              <input type="text" id={infoData.meta.name + "_range-input-max"} value={infoData.autoMax} />
              <label htmlFor={infoData.meta.name + "_range-input-max"}>{infoData.meta.unit === "oC" ? <span><sup>o</sup>C</span> : <span>W/m<sup>2</sup></span>}</label>
            </div>
          </div>
        </div>
      </div>
      )) }
      <div className={cx("safe")}>
        <div className={cx("safe-title")}>
          <p className={cx("safe-title-text")}>Safe Mode</p>
        </div>
        <div className={cx("safe-content")}>
          <div className={cx("safe-content-left")}>
            <p className={cx("safe-left-text")}>Action</p>
            <div className={cx("safe-left-radios")}>
              <div className={cx("safe-radio")}>
                <label htmlFor={infoData.meta.name + "_safe-radio-1"}>Ignore</label>
                {infoData.safeAction === 1 ? <input type="radio" id={infoData.meta.name + "_safe-radio-1"} value={1} checked name={infoData.meta.name + "safe"} />
                : <input type="radio" id={infoData.meta.name + "_safe-radio-1"} value={1} name={infoData.meta.name + "safe"} />}
              </div>
              <div className={cx("safe-radio")}>
                <label htmlFor={infoData.meta.name + "_safe-radio-2"}>Alert</label>
                {infoData.safeAction === 2 ? <input type="radio" id={infoData.meta.name + "_safe-radio-2"} value={2} checked name={infoData.meta.name + "safe"} />
                : <input type="radio" id={infoData.meta.name + "_safe-radio-2"} value={2} name={infoData.meta.name + "safe"} />}
              </div>
              <div className={cx("safe-radio")}>
                <label htmlFor={infoData.meta.name + "_safe-radio-3"}>Take action</label>
                {infoData.safeAction === 3 ? <input type="radio" id={infoData.meta.name + "_safe-radio-3"} value={3} checked name={infoData.meta.name + "safe"} />
                : <input type="radio" id={infoData.meta.name + "_safe-radio-3"} value={3} name={infoData.meta.name + "safe"} />}
              </div>
            </div>
          </div>
          <div className={cx("safe-content-right")}>
            <div className={cx("safe-lower")}>
              <label htmlFor={infoData.meta.name + "_safe-lower"}>Lower limit</label>
              <input type="text" id={infoData.meta.name + "_safe-lower"} value={infoData.safeMin} />
            </div>
            <div className={cx("safe-upper")}>
              <label htmlFor={infoData.meta.name + "_safe-upper"}>Upper limit</label>
              <input type="text" id={infoData.meta.name + "_safe-upper"} value={infoData.safeMax} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPanel