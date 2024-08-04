import React from "react";
import styles from "./styles.module.scss";
import { HamburgerMenu } from "@features/HamburgerMenu";
import logo from "@assets/logo.svg";

export const HeaderMobile: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img
          src={logo}
          alt="satbayev_logo"
          className={styles.header__container__logo}
        />
        <HamburgerMenu />
      </div>
    </header>
  );
};
