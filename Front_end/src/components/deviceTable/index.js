import classNames from "classnames/bind";
import styles from "./DeviceTable.module.scss";
import SearchButton from "../SearchButton";
import Button from "./Button";
import TableRow from "./TableRow";
import { useEffect, useState } from "react";
import { search } from "../../apiServices/searchService";
import { devicesImage } from "./data";

const cx = classNames.bind(styles);

function DeviceTable() {
  const [deviceInfo, setDeviceInfo] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({ path: `device` });
        setDeviceInfo(response.devices);
        console.log(response.devices);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("title")}>Devices</div>
        <div className={cx("action")}>
          <SearchButton />
          <Button title="Add new" primary />
          <Button title="Delete" danger />
        </div>
      </div>
      <div className={cx("inner")}>
        <div className={cx("table-header")}>
          <div className={cx("name-header")}>NAME</div>
          <div className={cx("table-col-normal")}>INSTALLED</div>
          <div className={cx("table-col-2")}>LAST CHECKING</div>
          <div className={cx("table-col-normal")}>PRICE</div>
          <div className={cx("table-col-normal")}>USING TIME</div>
          <div className={cx("table-col-normal")}></div>
        </div>
        <div className={cx("table-body-row")}>
          {deviceInfo.map((device, index) => (
            <TableRow
              device={device}
              img={devicesImage[device.key]}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeviceTable;
