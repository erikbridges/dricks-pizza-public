import React from "react";
import styles from "./CSS/index.styl";
import moment from "moment";

export default function Index() {
  return (
    <div className={styles["footer-main"]}>
      <span>&copy; {moment().format("YYYY")} Flattop Pizza Incorperated</span>
    </div>
  );
}
