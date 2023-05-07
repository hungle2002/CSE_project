import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({
  title,
  primary = false,
  danger = false,
  info = false,
  warning = false,
  onClick = null,
  small
}) {
  return (
    <button
      className={cx("wrapper", { primary, danger, info, warning, small })}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
