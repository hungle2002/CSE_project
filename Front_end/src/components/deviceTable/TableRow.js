import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DeviceTable.module.scss";
import Button from "./Button";
import React, { useEffect, useState, useContext } from "react";
import { create } from "../../apiServices/searchService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { SocketContext } from "../../context/socket"; 

const cx = classNames.bind(styles);

function TableRow({ device, img }) {
  const [state, setState] = useState(device.state);
  const socket =  useContext(SocketContext)

  useEffect( () => {
    socket.on(`update_device_${device.key}`,  value => setState( value ))
  }, [device.key, socket])
  
  const handleOnClick = async () => {
    try {
      setState(-1);
      const update_value = state >0 ? 0 : 1;
        await create({
          path: `device/${device.key}/state`,
          data: { value: update_value },
        });
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
        <h3 className={cx("header-day")}>{device.location}</h3>
        {device.usingTime < 100 && (
          <p className={cx("name-header-des")}>In progress</p>
        )}
        {device.usingTime >= 100 && (
          <p className={cx("name-header-des")}>Maintaining</p>
        )}
      </div>

      <div className={cx("table-col-normal")}>

        {device.typ !== 'Sensor' && state === 0 && (
          <Button title="Off" danger small onClick={handleOnClick} />
        )}
        { device.typ !== 'Sensor' && state > 0 && <Button title="On" info small onClick={handleOnClick} />}
        {device.typ !== 'Sensor' && state === -1 && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
          
        { device.typ === 'Sensor' && state > 0 && <p className={cx("state-sensor-good")}>Good</p>}
        { device.typ === 'Sensor' && state === 0 && <p className={cx("state-sensor-check")}>Check</p>}
      </div>
    </div>
  );
}

TableRow.propTypes = {
  device: PropTypes.object.isRequired,
  imp: PropTypes.string,
};

export default React.memo(TableRow);
