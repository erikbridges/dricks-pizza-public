import React from "react";
import styles from "./CSS/index.styl";
import ScrollableAnchor from "react-scrollable-anchor";
export default function Index() {
    return (
        <ScrollableAnchor id={"contact"}>
            <div  className={styles["contact"]}>
                <div className={styles["contact-container"]}>
                    <div className={styles["contact-box"]}>
                        <div className={styles["contact-content"]}>
                            <span>We are avaliable in these locations</span>
                            <ul>
                                <li>Atlanta Georgia</li>
                                <li>Dallas Texas</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["contact-box"]}>
                    <div className={styles["contact-content"]}>
                        <span>Get in touch</span>
                        <form className={styles["form-main"]}>
                                <div className={styles["form-input"]}>
                                    <label htmlFor="first_name">First Name</label>
                                    <input type="text" name="firstName" />
                                </div>
                                <div className={styles["form-input"]}>
                                    <label htmlFor="last_name">Last Name</label>
                                    <input type="text" name="lastName" />
                                </div>
                                <div className={styles["form-input"]}>
                                    <label htmlFor="email">Email</label>
                                    <input type="text" name="email" />
                                </div>
                                <div className={styles["form-input"]}>
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" name="subject" />
                                </div>
                                <div className={styles["form-input"]}>
                                    <label htmlFor="body">Message</label>
                                    <textarea type="text" name="body" />
                                </div>
                                <button className={styles["contact-btn"]}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
      
    );
}
