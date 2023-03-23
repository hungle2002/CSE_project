import React from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import RhandConent from "./RhandContent";
import ConditionBlockHome from "./ConditionBlockHome";
import DeviceTable from "../../components/deviceTable";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("main-content")}>
        <ConditionBlockHome className={cx("condition-info")} />
        <div className={cx("device-table")}>
          <DeviceTable />
        </div>
      </div>
      <RhandConent />
    </div>
  );
}

export default React.memo(Home);
