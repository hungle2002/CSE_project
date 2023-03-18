import classNames from "classnames/bind";
import styles from "./StatCard.module.scss";
import images from "../../assets/images";
import {
  fa
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function StatCard({ title, value, upValue, isUp, image }) {
  return (
    <div className={cx('statcard-box')}>
      <div className={cx('title-box')}>
        <div className={cx('left-side')}>
          <h2>{numberWithCommas(value)}</h2>
          <h3>{title}</h3>
        </div>
        <img className={cx("icon-box")} src={image} alt="icon" />
      </div>
      <div className={cx('title-box', 'justify')}>
        <div className={cx('title-box')}>
          <img className={cx("arrow")} src={isUp ? images.uparrow : images.downarrow} alt="arrow" />
          <p>{upValue}%</p>
        </div>
        <p>Since yesterday</p>
      </div>
    </div>
  );
}
