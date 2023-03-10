import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";


import Header from "./Header";
import SideBar from "./SideBar";

const cx = classNames.bind(styles);

function DefaultLayout({ children, title }) {
  return (
    <div className={cx("wrapper")}>
      <SideBar />
      <div className={cx("container")}>
        <Header title={title} />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
