import { useState } from "react";
import styles from "./styles.module.scss";
import { links } from "@shared/content/Menu";

export const HamburgerMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);
  return (
    <div className={styles.menu}>
      <button className={styles.menu__burger} onClick={handleClick}>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line1
              : styles.menu__burger__line1
          }`}
        ></span>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line2
              : styles.menu__burger__line2
          }`}
        ></span>
        <span
          className={`${styles.menu__burger__line} ${
            isActive
              ? styles.menu__active__burger__line3
              : styles.menu__burger__line3
          }`}
        ></span>
      </button>
      <nav
        className={`${isActive ? styles.menu__active__nav : styles.menu__nav}`}
      >
        <ul
          className={`${
            isActive ? styles.menu__active__nav__list : styles.menu__nav__list
          }`}
        >
          {links.map((item, index) => (
            <li
              key={index}
              className={`${
                isActive
                  ? styles.menu__active__nav__list__item
                  : styles.menu__nav__list__item
              }`}
            >
              <a
                href={item.anchor}
                className={`${
                  isActive
                    ? styles.menu__active__nav__list__link
                    : styles.menu__nav__list__link
                }`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
