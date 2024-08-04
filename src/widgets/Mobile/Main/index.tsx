import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { breadcrumbs } from "@shared/content/Main";
import atom from "@assets/atom.png";

const MainMobile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <ul className={styles.main__container__breadcrumbs}>
          {breadcrumbs.map((item, index) => (
            <li
              key={index}
              className={styles.main__container__breadcrumbs__item}
            >
              <Link
                to={item.link}
                className={styles.main__container__breadcrumbs__link}
              >
                {item.text}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <img
                  src={atom}
                  className={styles.main__container__breadcrumbs__img}
                  alt="atom"
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainMobile;
