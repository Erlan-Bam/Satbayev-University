import styles from "./styles.module.scss";
import Breadcrumbs from "@entities/Mobile/Breadcrumbs";
import molecule from "@assets/molecule.png";

const MainMobile = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Breadcrumbs />
        <h1 className={styles.main__container__heading}>
          Кафедра <strong style={{ color: "#005DAC" }}>Химических</strong>{" "}
          процессов и промышленной экологии.
        </h1>
        <p className={styles.main__container__paragraph}>
          Кафедра «Химические Процессы и Промышленная Экология», которую
          возглавляет Кубекова Шолпан Накишбековна, образована в июне 2020 года
          в результате реорганизации кафедры «Химическая и биохимическая
          инженерия» и является правопреемницей таких кафедр, как «Химическая
          технология неорганических веществ», «Прикладная химия», «Прикладная
          экология», «Безопасность жизнедеятельности».
        </p>
      </div>
      <img src={molecule} alt="" />
    </div>
  );
};

export default MainMobile;
