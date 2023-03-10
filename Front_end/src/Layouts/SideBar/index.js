import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";

import images from "../../assets/images";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <aside className={cx("wrapper")}>
      <img className={cx("logo")} src={images.logo} alt="sunImage" />
      <h2>SideBar!</h2>
    </aside>
  );
}

export default SideBar;
