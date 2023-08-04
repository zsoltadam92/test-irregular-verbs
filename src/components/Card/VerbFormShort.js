import { useContext } from "react";
import styles from "./VerbFormShort.module.css";
import CardContext from "../../store/card-context";

const VerbFormShort = () => {
  const cardCtx = useContext(CardContext);

  const { verbForm } = cardCtx;
  return (
    <div
      className={`${styles["short-verbForm"]} ${
        verbForm === "simplePast" ? styles.v2 : styles.v3
      }`}
    >
      {verbForm === "simplePast" ? "v2" : "v3"}
    </div>
  );
};

export default VerbFormShort;
