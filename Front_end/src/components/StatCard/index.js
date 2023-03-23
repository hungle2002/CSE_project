import classNames from "classnames/bind";
import styles from "./StatCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faArrowTrendDown
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function StatCard({ title, value, upValue, isUp, content, isIcon }) {
  const upArrowColor = isIcon ? "#34C759" :"#FF3B30"
  const downArrowColor = isIcon ? "#FF3B30" :"#34C759"
  return (
    <div className={cx('statcard-box')}>
      <div className={cx('title-box')}>
        <div className={cx('left-side')}>
          <h2>{numberWithCommas(value)}</h2>
          <h3>{title}</h3>
        </div>
        { isIcon ? <FontAwesomeIcon
            className={cx("icon-box")}
            icon={content}
            style={{ color: "#4979D1", width:'22px', height: '22px'}}
          />:<div className={cx("icon-box")}><div><p>{content}</p></div></div>}
      </div>
      <div className={cx('title-box', 'justify')}>
        <div className={cx('title-box')}>
          {isUp ? <FontAwesomeIcon
            className={cx("arrow")}
            icon={faArrowTrendUp}
            style={{ color: upArrowColor, width:'22px', height: '22px'}}
          />:<FontAwesomeIcon
          className={cx("aroww")}
          icon={faArrowTrendDown}
          style={{ color: downArrowColor, width:'22px', height: '22px'}}
        />}
          <p>{upValue}%</p>
        </div>
        <p>Since yesterday</p>
      </div>
    </div>
  );
}
