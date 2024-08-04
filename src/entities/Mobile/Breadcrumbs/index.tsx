import { breadcrumbs } from "@shared/content/Main";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import atom from "@assets/atom.png";
const Breadcrumbs = () => {
  return (
    <ul className={styles.breadcrumbs}>
      {breadcrumbs.map((item, index) => (
        <li key={index} className={styles.breadcrumbs__item}>
          <Link to={item.link} className={styles.breadcrumbs__link}>
            {item.text}
          </Link>
          {index < breadcrumbs.length - 1 && (
            <img src={atom} className={styles.breadcrumbs__img} alt="atom" />
          )}
        </li>
      ))}
    </ul>
  );
};
export default Breadcrumbs;
