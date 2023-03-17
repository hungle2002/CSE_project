import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./IconAndNum.module.scss";

const cx = classNames.bind(styles);

function IconAndNum({ icon, chooseColor, num, type, small, big }) {
  return (
    <div className={cx("wrapper", { small, big })}>
      <div style={{ color: chooseColor }} className={cx("icon")}>
        {icon}
      </div>
      <h3 className={cx("num")}>
        {num}
        <span className={cx("unit")}>{type}</span>
      </h3>
    </div>
  );
}

IconAndNum.propTypes = {
  icon: PropTypes.node.isRequired,
  chooseColor: PropTypes.string,
  num: PropTypes.node.isRequired,
  type: PropTypes.string,
  small: PropTypes.bool,
  big: PropTypes.bool,
};

export default IconAndNum;
