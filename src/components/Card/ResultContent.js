import React, { useContext } from "react";
import styles from "./ResultContent.module.css";
import CardContext from "../../store/card-context";
import Button from "../UI/Button";

const ResultContent = () => {
  const cardCtx = useContext(CardContext);
  const { currentPoint, selectedVerbs, tryAgain } = cardCtx;

  return (
    <React.Fragment>
      <div className={styles.result}>
        Result: {currentPoint + "/" + selectedVerbs.length}
      </div>
      <Button onClick={tryAgain}>Try again</Button>
    </React.Fragment>
  );
};

export default ResultContent;
