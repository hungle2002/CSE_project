import classNames from 'classnames/bind';
import styles from "./UserInfo.module.scss"
import images from "../../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRightToBracket} from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

const UserInfo = ({user}) => {

  const handleLogout = async () => {
    document.cookie = "username=; Max-Age=-1;"
    window.location.href = "/setting"
  }

  return (
    <div className={cx("container")}>
        <div className={cx("top")}>
          <div className={cx("info-image")}>
            <img className={cx("user-image")} src={images.user} alt='User avatar' />
          </div>
          <div className={cx("other-info")}>
            <h1 className={cx("display-name")}>Admin</h1>
            <p className={cx("display-acnt-info")}>Premium account</p>
          </div>
        </div>
        <div className={cx("info")}>
          <div className={cx("info-item")}>
            <p className={cx("info-label")}>Username:</p>
            <p className={cx("info-value")}>{user.username}</p>
          </div>
        </div>
        <div className={cx("actions")}>
          <div className={cx("actions-item")}>
            <button className={cx("logout-button")} onClick={handleLogout}>
              Logout
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </button>
          </div>  
        </div>
    </div>
  )
}

export default UserInfo