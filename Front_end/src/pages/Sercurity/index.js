import React, { useState } from 'react';
import styles from "./sercurity.module.scss";
import classNames from "classnames/bind";
import Switch from "../../components/ToggleSwitch"
import StateLine from "../../components/StateLine"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faDownload
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Security() {
  const messageItems = [
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: '17/06/2023',
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: '17/06/2023',
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: '17/06/2023',
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: '17/06/2023',
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: '17/06/2023',
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    },
    {
      Date: '14/03/2023',
      Message: 'haha'
    },
    {
      Date: "17/06/2023",
      Message: 'huhu'
    },
    {
      Date: '17/03/2023',
      Message: 'Anh Hung dep trai qua'
    }
  ];
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(true);

  return (
    <div className={cx('main-content')}>
      <div className={cx('left-side')}>
        <div className={cx('content-line')}>
          <h2>Security Alarm</h2>
          <h2>{active1 ? 'Active' : 'Inactive'}</h2>
        </div>
        <Switch
          isOn={value1}
          handleToggle={() => setValue1(!value1)}
          type={1} no={1} />
        <Switch
          isOn={value2}
          handleToggle={() => setValue2(!value2)}
          type={0} no={2} />
        <div className={cx('content-line')}>
          <h2>Fire detector</h2>
          <h2>{active2 ? 'Active' : 'Inactive'}</h2>
        </div>
        <Switch
          isOn={value3}
          handleToggle={() => setValue3(!value3)}
          type={1} no={3} />
      </div>
      <div className={cx('just-a-line')}><hr></hr></div>
      <div className={cx('right-side')}>
        <div className={cx('dialog-header')}>
          <h2> System State</h2>
          <div><FontAwesomeIcon
            className={cx("icon")}
            icon={faTrashCan}
            style={{ color: "#4979D1" }}
          />
            <FontAwesomeIcon
            className={cx("icon")}
            icon={faDownload}
            style={{ color: "#4979D1" }}
          /></div>
        </div>
        <div className={cx('dialog-line')}>
          <h3>Date</h3>
          <h3>State</h3>
        </div>
        <div className={cx('dialog-box')}>
          {messageItems.map((item, index) => {
            return (
              <StateLine
                Date={item.Date}
                Message={item.Message} />
            );
          })}
        </div>
      </div>
    </div >);
}

export default Security;
