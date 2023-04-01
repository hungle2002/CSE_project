import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DeviceTable.module.scss";
import Button from "./Button";
import React, { useState } from "react";
import { create } from "../../apiServices/searchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function TableRow({ device, img }) {
  const [state, setState] = useState(device.state);

  const handleOnClick = async () => {
    try {
      setState(-1);
      const updateState = state > 0 ? 0 : 1;
      const response = await create({
        path: `device/${device.key}/state`,
        data: { value: updateState },
      });
      setState(Number(response.result.value));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={cx("table-body")}>
      <div className={cx("name-header")}>
        <img className={cx("image")} src={img} alt="temperature sensor" />
        <div className={cx("name-header-info")}>
          <h3>{device.typ}</h3>
          <p className={cx("name-header-des")}>{device.des}</p>
        </div>
      </div>
      <div className={cx("table-col-normal")}>
        <div className={cx("name-header-info")}>
          <h3 className={cx("header-day")}>{device.installedDate}</h3>
          <p className={cx("name-header-des")}>Guarantee</p>
        </div>
      </div>

      <div className={cx("table-col-2", "header-day")}>{device.lastChecked} days</div>

      <div className={cx("table-col-normal")}>
        <div className={cx("name-header-info")}>
          <h3 className={cx("header-day")}>${device.price}</h3>
          {device.price <= 12 && <p className={cx("name-header-des")}>Paid</p>}
          {device.price > 12 && <p className={cx("name-header-des")}>Unpaid</p>}
        </div>
      </div>
      <div className={cx("table-col-normal")}>
        <h3 className={cx("header-day")}>{device.usingTime}h</h3>
        {device.usingTime < 1 && (
          <p className={cx("name-header-des")}>Good</p>
        )}
        {device.usingTime >= 1 && (
          <p className={cx("name-header-des")}>Not good</p>
        )}
      </div>

      <div className={cx("table-col-normal")}>
        {state === 0 && (
          <Button title="Off" danger small onClick={handleOnClick} />
        )}
        {state > 0 && <Button title="On" info small onClick={handleOnClick} />}
        {state === -1 && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
      </div>
    </div>
  );
}

TableRow.propTypes = {
  device: PropTypes.object.isRequired,
  imp: PropTypes.string,
};

export default React.memo(TableRow);
