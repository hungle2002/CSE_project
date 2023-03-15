import styles from "./StateLine.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const StateLine = ({ Date, Message }) => {
  return (
    <div className={cx('dialog-line')}>
      <p>{Date}</p>
      <p>{Message}</p>
    </div>
  );
}

export default StateLine;
