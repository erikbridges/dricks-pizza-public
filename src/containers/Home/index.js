import React from "react";
import styles from "./CSS/index.styl";
import ScrollableAnchor from "react-scrollable-anchor";

function Index() {
  return (
    <ScrollableAnchor id={"home"}>
      <div  className={styles["home"]}>
        <div className={styles["home-main"]}>
          <img src="./public/images/homepage-img.jpg" alt="homepage" />
          <div className={styles["home-header"]}>
            <h1>Start earning free pizza</h1>
            <button>Check out our rewards program</button>
            <span>Conditions may apply. Only at participating locations</span>
          </div>
      </div>
    </div>
    </ScrollableAnchor>
 
  );
}

export default Index;
