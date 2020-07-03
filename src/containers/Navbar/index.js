import React, { useEffect, useState, Fragment } from "react";
import styles from "./CSS/index.styl";
import classNames from "classnames";
import MediaQuery from "react-responsive";

function Index() {
  const [scroll, setScroll] = useState(1);
  const [collapse, setCollapse] = useState(false);
  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 10;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [scroll, setScroll]);

  // Control Navbar Mobile toggle
  const toggleCollapse = () => {
    setCollapse(!collapse);
    // Disable/Enable Body Scroll
    if (collapse == false) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };

  return (
    <Fragment>
        <MediaQuery minWidth={968} >
      <nav
        className={classNames({
          [styles["navbar-main"]]: true,
          [styles["scroll"]]: scroll,
        })}
      >
        <div
          className={classNames({
            [styles["logo"]]: true,
            [styles["scroll"]]: scroll,
          })}
        >
          <img src="./public/images/logo.png" alt="" />
        </div>
        <a  href="#home">Home</a>
        <a  href="#about">About</a>
        <a  href="#services">Services</a>
        <a  href="#contact">Contact</a>
      </nav>
    </MediaQuery>
    <MediaQuery maxWidth={968}>
    <nav
        className={classNames({
          [styles["navbar-main-mobile"]]: true,
          [styles["scroll"]]: scroll,
        })}
    >
          <div className={styles["navbar-collapse"]} onClick={() => toggleCollapse()}>
            <span />
            <span />
            <span />
          </div>
          <div
            className={classNames({
              [styles["logo"]]: true,
              [styles["scroll"]]: scroll,
            })}
          >
            <img src="./public/images/logo.png" alt="" />
          </div>
      </nav>
      <div className={classNames({[styles["navbar-mobile-main"]]: true, [styles["collapse"]]: collapse})}>
        <div className={styles["navbar-container"]}> 
          <a href="#home" onClick={() => toggleCollapse()}>Home</a>
          <a  href="#about" onClick={() => toggleCollapse()}>About</a>
          <a  href="#services" onClick={() => toggleCollapse()}>Services</a>
          <a   href="#contact"onClick={() => toggleCollapse()}>Contact</a>
        </div>
      </div>
    </MediaQuery>
    </Fragment>
  
  );
}

export default Index;
