import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import SearchButton from "../../components/SearchButton";

const cx = classNames.bind(styles);

function Header({ title }) {

  // open new window for plant detection
  const handlePlant = () => {
    window.open('http://127.0.0.1:5000/webcam', '_blank');
  };

  return (
    <aside className={cx("wrapper")}>
      <div className={cx("title")}>
        <FontAwesomeIcon className={cx("icon")} icon={faHouseChimneyWindow} />
        <h2>{title}</h2>
      </div>

      <div className={cx("action")}>
        <img className={cx("logo")} src={images.plantDisease} alt="plant disease" onClick={handlePlant}/>
        <SearchButton />
        <button className={cx("alert")}>
          <FontAwesomeIcon className={cx("bell-icon")} icon={faBell} />
        </button>
        <img className={cx("logo")} src={images.user} alt="userImage" />
      </div>
    </aside>
  );
}

export default Header;
