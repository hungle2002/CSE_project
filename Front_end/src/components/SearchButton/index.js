import classNames from "classnames/bind";
import styles from "./SearchButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const cx = classNames.bind(styles);

function SearchButton() {
  return (
    <div className={cx("search")}>
      <input className={cx("search-input")} placeholder="Tìm kiếm" />
      <button>
        <FontAwesomeIcon className={cx("search-icon")} icon={faSearch} />
      </button>
    </div>
  );
}

export default React.memo(SearchButton);
