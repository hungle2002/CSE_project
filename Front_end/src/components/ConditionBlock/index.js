import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./ConditionBlock.module.scss";
import IconAndNum from "../IconAndNum";
import config from "../../config";

const cx = classNames.bind(styles);

function ConditionBlock({ item }) {
  // check mode
  const mode = item.mode;
  let bottomRange = 0,
    topRange = 0;
  let modeSetting = null;
  // 0 : auto mode
  if (mode === 0) {
    bottomRange = item.autoMin;
    topRange = item.autoMax;
    modeSetting = config.modes[0];
  }
  // 1: scheduler mode
  else if (mode === 1) {
    bottomRange = item.safeMin;
    topRange = item.safeMax;
    modeSetting = config.modes[1];
  }
  // 2: mannual mode
  else if (mode === 2) {
    bottomRange = item.manualMin;
    topRange = item.manualMax;
    modeSetting = config.modes[2];
  }
  if (modeSetting == null) return;

  return (
    <div
      className={cx("wrapper")}
      style={{ backgroundColor:item.condition.color }}
    >
      <div className={cx("left-content")}>
        <IconAndNum
          icon={item.icon}
          chooseColor={item.color}
          num={item.number}
          type={item.condition.unit}
          big
        />
        <p className={cx("condition-name")}>{item.condition.title}</p>
      </div>
      <div className={cx("space")}></div>
      <div className={cx("right-content")}>
        <h2 className={cx("mode-title")}>{modeSetting.title}</h2>
        <p className={cx("condition-name")}>{modeSetting.action}</p>

        {/* Output for mode */}
        {(mode === 0 || mode === 2) && (
          <p className={cx("condition-range")}>
            {bottomRange}-{topRange} {item.condition.unit}
          </p>
        )}
        {mode === 1 && (
          <p className={cx("condition-range")}>
            {item.schedStart}-{item.schedEnd}
          </p>
        )}

        {/* check state good, low or high */}
        {item.number >= bottomRange && item.number <= topRange && (
          <p className={cx("condition-state")}>Good</p>
        )}
        {item.number < bottomRange && (
          <p className={cx("condition-state", "low-condition")}>Low</p>
        )}
        {item.number > topRange && (
          <p className={cx("condition-state", "high-condition")}>High</p>
        )}
      </div>
    </div>
  );
}

ConditionBlock.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ConditionBlock;
