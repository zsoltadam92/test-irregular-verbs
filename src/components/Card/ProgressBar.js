import styles from "./ProgressBar.module.css";

const ProgressBar = ({ progress, totalSteps }) => {
  return (
    <div className={styles["progress-bar"]}>
      <div
        className={styles.progress}
        style={{ width: `${(progress / totalSteps) * 100}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
