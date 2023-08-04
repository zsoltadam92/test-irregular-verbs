import { useContext } from "react";
import styles from "./TaskContent.module.css";
import CardContext from "../../store/card-context";

const TaskContent = () => {
  const cardCtx = useContext(CardContext);
  const { selectedVerbs, currentVerbIndex } = cardCtx;
  const currentVerb = selectedVerbs[currentVerbIndex];

  return (
    <div className={styles.task}>
      <h2 className={styles.h2}>{currentVerb.v1}</h2>
      <p>({currentVerb.v1Hu})</p>
    </div>
  );
};

export default TaskContent;
