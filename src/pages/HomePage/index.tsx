import { HeaderMobile } from "@shared/Mobile/Header";
import styles from "./styles.module.scss";
import MainMobile from "@widgets/Mobile/Main";
const HomePage = () => {
  return (
    <div>
      <div className={styles.mobile}>
        <HeaderMobile />
        <MainMobile />
      </div>
      <div className={styles.pc}></div>
    </div>
  );
};

export default HomePage;
