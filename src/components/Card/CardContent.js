import React, { useContext } from "react";
import CardContext from "../../store/card-context";
import ResultContent from "./ResultContent";
import ProgressBar from "./ProgressBar";
import FormContent from "./FormContent";

const CardContent = () => {
  const cardCtx = useContext(CardContext);

  const { selectedVerbs, isFinished, progress, remainingTime } = cardCtx;

  return (
    <React.Fragment>
      <ProgressBar progress={progress} totalSteps={selectedVerbs.length} />
      {!isFinished && <FormContent />}
      {isFinished && <ResultContent />}
    </React.Fragment>
  );
};

export default CardContent;
