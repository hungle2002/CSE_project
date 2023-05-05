import { useContext } from "react";
import { SocketContext } from "../../context/socket";
import classNames from "classnames/bind";
import styles from "./Setting.module.scss"
import UserInfo from "../../components/UserInfo";
import Login from "../../components/Login";

const cx = classNames.bind(styles)

function Setting() {
  const socket = useContext(SocketContext);

  function onFooEvent(value) {}
  socket.on("update_something", onFooEvent);

  const getUsername = () => {
    const username = document.cookie.substring(document.cookie.indexOf("=") + 1)
    if (username.length) return username
    return ""
  }
  
  const user = {
    username: getUsername()
  }

  return (
    <div className={cx("container")}>
      <div className={cx("inner-container")}>
        <div className={cx("content")}>
          {user.username.length ? <UserInfo user={user} /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default Setting;
