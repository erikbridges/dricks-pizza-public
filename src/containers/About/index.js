import React from "react";
import styles from "./CSS/index.styl";
import ScrollableAnchor from "react-scrollable-anchor";
 function Index() {
    return (
        <ScrollableAnchor id={"about"}>
            <div  className={styles["about-main"]}>
                <img className={styles["about-image"]} src="./public/images/about-bg.jpg" alt="About_Image"/>
                <div className={styles["about-header"]}>
                    <div className={styles["about-title"]}>
                        <h1>About Us</h1>
                    </div>
                    <div className={styles["about-content"]}>
                        <p>Our pizzas are made from the finest ingredients, like 100% mozzarella cheese and dough made fresh daily. Choose from 8 mouthwatering crust flavors: Butter, Butter Cheese, Asiago Cheese, Ranch, Onion, Cajun, Sesame and Garlic Herb. Place your carry out or delivery order by calling your local store or ordering online today.</p>
                        <p>We are consistently ranked as one of the top pizza franchises in the nation. From its humble beginnings outside of Detroit, MI, Hungry Howie’s has grown to over 550 locations in 20 states. We have a solid franchise system and we are actively seeking qualified candidates to join our family of independently owned and operated franchises.  </p>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    );
}

export default Index;