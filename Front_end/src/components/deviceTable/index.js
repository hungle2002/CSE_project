import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import styles from "./DeviceTable.module.scss";
import SearchButton from "../SearchButton";
import Button from "./Button";
import TableRow from "./TableRow";
import { useEffect, useState, useRef } from "react";
import { search } from "../../apiServices/searchService";
import { devicesImage } from "./data";
import Voice from "../Voice";

const cx = classNames.bind(styles);

function DeviceTable() {
  const [deviceInfo, setDeviceInfo] = useState([]);
  const [micState, setMicState] = useState(0)
  const refreshButtonRef = useRef(null);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await search({ path: `device` });
        setDeviceInfo(response.devices);
        const currentDevice = [];
        response.devices.forEach((e) => {
          currentDevice.push(e.state);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  const handleOnRefresh = async () => {
    refreshButtonRef.current.classList.add(cx("iconLoading"));
    await search({ path: `device/state` });
    refreshButtonRef.current.classList.remove(cx("iconLoading"));
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("title")}>
        <FontAwesomeIcon icon={faMicrophone} className={cx("voice-mic")} onClick={ () => {setMicState(1)}}/>
        Devices
        </div>
        <div className={cx("action")}>
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
          <div className={cx("table-col-normal")}>LOCATION</div>
          <div className={cx("table-col-normal")}>
            <button className={cx("refresh-button")} onClick={handleOnRefresh}>
              <div ref={refreshButtonRef} className={cx("refresh-button-icon")}>
                <FontAwesomeIcon icon={faArrowsRotate} />
              </div>
              Refresh
            </button>
          </div>
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
{micState === 1 && <div className={cx("voice-background")}>
          <div className={cx("voice-background-opacity")}></div>
          <div className={cx("main-voice")}><Voice closeModel = {setMicState}/></div>
      </div>}
    </div>
  );
}

export default DeviceTable;
