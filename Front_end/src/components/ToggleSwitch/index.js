import styles from "./ToggleSwitch.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const ToggleSwitch = ({ isOn, handleToggle, type, no }) => {
  return (
    <div className={cx('content-line')}>
      <h2 className={cx('sub-content')}>{type ? 'Alert' : 'Alarm'}  is {isOn ? 'on' : 'off'}</h2>
      <div className={cx('switch')}>
        <input
          checked={isOn}
          onChange={handleToggle}
          className={cx("react-switch-checkbox")}
          id={`react-switch-new` + no}
          type={cx("checkbox")}
        />
        <label
          style={{ background: isOn && '#000000' }}
          className={cx("react-switch-label")}
          htmlFor={`react-switch-new` + no}
        >
          <span className={cx("react-switch-button")} />
        </label>
        <h3>{isOn ? 'ON' : 'OFF'}</h3>
      </div>
    </div>
  );
}

export default ToggleSwitch;
