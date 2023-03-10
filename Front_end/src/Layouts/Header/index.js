import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header({ title }) {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("title")}>
        <FontAwesomeIcon className={cx("icon")} icon={faHouseChimneyWindow} />
        <h2>{title}</h2>
      </div>

      <div className={cx("action")}>
        <div className={cx("search")} >
          <input className={cx("searchInput")} placeholder="Tim kiem .." />
          <FontAwesomeIcon className={cx("bell-icon")} icon={faSearch} />
        </div>
        <button className={cx("alert")}>
          <FontAwesomeIcon className={cx("bell-icon")} icon={faBell} />
        </button>
        <img className={cx("logo")} src={images.user} alt="userImage" />
      </div>
    </aside>
  );
}

export default Header;
