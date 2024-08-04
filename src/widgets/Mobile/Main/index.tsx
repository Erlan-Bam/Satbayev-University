import styles from "./styles.module.scss";
import Breadcrumbs from "@entities/Mobile/Breadcrumbs";

const MainMobile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Breadcrumbs />
      </div>
    </div>
  );
};

export default MainMobile;
