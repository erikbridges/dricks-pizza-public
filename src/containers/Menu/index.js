import React from "react";
import styles from "./CSS/index.styl";
import MediaQuery from "react-responsive";
import ScrollableAnchor from "react-scrollable-anchor";

 function Index() {
    return (
        <ScrollableAnchor id={"services"}>
            <div className={styles["menu"]}>
                <MediaQuery minWidth={968} >
                    <div className={styles["images-container"]}>
                        <div className={styles["images-box"]}>
                            <img src="./public/images/pizza-bg.jpg" alt="pizza image"/>
                            <div className={styles["menu-title"]}>
                                <h1>Carry Out</h1>
                            </div>
                        </div>
                        <div  className={styles["images-box"]}>
                            <img src="./public/images/bread-bg.jpg" alt="Bread Image"/>
                            <div className={styles["menu-title"]}>
                                <h1>Delivery</h1>
                            </div>
                        </div>
                        <div className={styles["images-box"]}>
                            <img src="./public/images/sub-bg.jpg" alt="sub image"/>
                            <div className={styles["menu-title"]}>
                                <h1>Dine In</h1>
                            </div>
                        </div>
                    </div>
                    </MediaQuery>
                    <MediaQuery maxWidth={968}>
                        <div className={styles["images-container-mobile"]}>
                            <div className={styles["images-box-mobile"]}>
                                <img src="./public/images/pizza-bg.jpg" alt="pizza image"/>
                                <div className={styles["menu-title-mobile"]}>
                                    <h1>Carry Out</h1>
                                </div>
                            </div>
                            <div  className={styles["images-box-mobile"]}>
                                <img src="./public/images/bread-bg.jpg" alt="Bread Image"/>
                                <div className={styles["menu-title-mobile"]}>
                                    <h1>Delivery</h1>
                                </div>
                            </div>
                            <div className={styles["images-box-mobile"]}>
                                <img src="./public/images/sub-bg.jpg" alt="sub image"/>
                                <div className={styles["menu-title-mobile"]}>
                                    <h1>Dine In</h1>
                                </div>
                            </div>
                        </div>
                    </MediaQuery>
                </div>
            </ScrollableAnchor>
    );
}

export default Index;