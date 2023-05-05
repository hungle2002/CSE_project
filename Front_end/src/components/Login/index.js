import { useState } from "react"
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { create } from "../../apiServices/searchService";
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

const Login = () => {

  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await create({
        path: "/auth/login",
        data: {username: username.trim() , password: password.trim()}
      })
      if (response.code !== 200) {
        setErrorMsg(response.msg)
        return
      }
      document.cookie = `username=${username.trim()};secure`;
      navigate("/home")
    } catch (error) {
      console.log(error.message)
    }
    
  }

  return (
    <div className={cx("container")}>
      <p className={cx("form-legend")}>Login</p>
      <form onSubmit={(e) => handleSubmit(e)} className={cx("form-container")}>
        <div className={cx("form-field")}>
          <label htmlFor="username" className={cx("form-field-label")}>Username</label>
          <input value={username} type="text" className={cx("form-field-input")} id="username" required onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={cx("form-field")}>
          <label htmlFor="password" className={cx("form-field-label")}>Password</label>
          <input value={password} type="password" className={cx("form-field-input")} id="password" required onChange={(e) => setPassword(e.target.value)} />
        </div>
        {errorMsg.length ? <p className={cx("error-msg")}>{errorMsg}</p> : null}
        <button type="submit" className={cx("submit-button")}>Login</button>
      </form>
    </div>
  )
}

export default Login