import styles from "./SideBar.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import images from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingLock,
  faChartLine,
  faGear,
  faHouseFloodWater,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import routes from "../../config/routes";
import Tippy from "@tippyjs/react";

const cx = classNames.bind(styles);

function SideBar() {
  const navbarItems = [
    {
      path: routes.home,
      icon: faLeaf,
      value:'Home page'
    },
    {
      path: routes.statistic,
      icon: faChartLine,
      value:'Statistic view'
    },
    {
      path: routes.mode,
      icon: faHouseFloodWater,
      value:'Irrigation mode'
    },
    {
      path: routes.sercurity,
      icon: faBuildingLock,
      value:'Sercurity mode'
    },
    {
      path: routes.setting,
      icon: faGear,
      value:'Setting mode'
    },
  ];

  return (
    <aside className={cx("wrapper")}>
      <img className={cx("logo")} src={images.logo} alt="sunImage" />
      <div className={cx("nav-bar")}>
        {navbarItems.map((item, index) => {
          const url = window.location.href;
          const isPage = url.includes(item.path);
          return (
            <Tippy
              content={item.value}
              placement="right-end"
              key={index}
            >
              <Link to={item.path}>
                <FontAwesomeIcon
                  className={cx("icon")}
                  icon={item.icon}
                  style={isPage && { color: "#0a7514" }}
                />
              </Link>
            </Tippy>
          );
        })}
      </div>
    </aside>
  );
}

export default SideBar;
