import classNames from "classnames/bind";
import styles from "./ConditionBlock.module.scss";
import IconAndNum from "../IconAndNum";

const cx = classNames.bind(styles);

function ConditionBlock({ item }) {
  return (
    <div className={cx("wrapper")} style={{ backgroundColor: item.mode.color }}>
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
        <h2 className={cx("mode-title")}>{item.mode.title}</h2>
        <p className={cx("condition-name")}>{item.mode.action}</p>


        {/* Output for mode */}
        {(item.mode.title === "AUTOMATIC" || item.mode.title === "MANNUAL") && (
          <p className={cx("condition-range")}>
            {item.bottomRange}-{item.topRange} {item.condition.unit}
          </p>
        )}
        {item.mode.title === "SCHEDULED" && (
          <p className={cx("condition-range")}>
            {item.startTime}-{item.endTime}
          </p>
        )}

        {/* check state good, low or high */}
        {item.number >= item.bottomRange && item.number <= item.topRange && (
          <p className={cx("condition-state")}>Good</p>
        )}
        {item.number < item.bottomRange && (
          <p className={cx("condition-state", "low-condition")}>Low</p>
        )}
        {item.number > item.topRange && (
          <p className={cx("condition-state", "high-condition")}>High</p>
        )}
      </div>
    </div>
  );
}

export default ConditionBlock;
