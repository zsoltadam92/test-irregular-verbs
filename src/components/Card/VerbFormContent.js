import styles from "./VerbFormContent.module.css";
import { speakHandler } from "../../helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VerbFormContent = ({ label, value, icon, isUsed }) => {
  return (
    <div
      style={{ display: "inline-block", cursor: "pointer" }}
      onClick={() => speakHandler(value)}
    >
      <FontAwesomeIcon icon={icon} className={styles.volume} />
      <span
        className={`${styles.verbForm} ${
          isUsed ? styles["used-verbForm"] : ""
        }`}
      >
        <small>{label}</small> {value}
      </span>
    </div>
  );
};

export default VerbFormContent;
