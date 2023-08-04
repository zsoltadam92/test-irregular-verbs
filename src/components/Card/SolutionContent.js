import { useContext, useEffect } from "react";
import styles from "./SolutionContent.module.css";
import CardContext from "../../store/card-context";
import Solution from "./Solution";
import Button from "../UI/Button";

const SolutionContent = () => {
  const cardCtx = useContext(CardContext);
  const { selectedVerbs, currentVerbIndex, verbForm, nextVerb, isChecked } =
    cardCtx;
  const currentVerb = selectedVerbs[currentVerbIndex];

  useEffect(() => {
    const delay = setTimeout(() => {
      const solutionElement = document.getElementById("solution");
      if (solutionElement) {
        solutionElement.classList.add(styles["show-solution"]);
      }
    }, 10);

    return () => {
      clearTimeout(delay);
    };
  }, [isChecked]);

  return (
    <div id="solution" className={`${styles.solution}`}>
      <Solution
        v1={currentVerb.v1}
        simplePast={currentVerb.simplePast}
        pastParticiple={currentVerb.pastParticiple}
        exampleSentenceEn={
          verbForm === "simplePast"
            ? currentVerb.simplePastExampleEn
            : currentVerb.pastParticipleExampleEn
        }
        exampleSentenceHu={
          verbForm === "simplePast"
            ? currentVerb.simplePastExampleHu
            : currentVerb.pastParticipleExampleHu
        }
        verbForm={verbForm}
      />
      <Button onClick={nextVerb}>
        {currentVerbIndex === selectedVerbs.length - 1 ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

export default SolutionContent;
