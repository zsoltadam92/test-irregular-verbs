import { useContext } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Countdown from "./Countdown";
import SolutionContent from "./SolutionContent";
import TaskContent from "./TaskContent";
import CardContext from "../../store/card-context";
import VerbFormShort from "./VerbFormShort";

const FormContent = () => {
  const cardCtx = useContext(CardContext);
  const { checkVerb, verbInputRef, isChecked, answerState, verbForm } = cardCtx;

  return (
    <form onSubmit={checkVerb}>
      <Countdown />
      <TaskContent />
      <VerbFormShort />
      <Input
        ref={verbInputRef}
        type="text"
        disabled={isChecked}
        className={answerState}
        placeholder={verbForm}
      />
      {!isChecked ? <Button type="submit">Check</Button> : <SolutionContent />}
    </form>
  );
};

export default FormContent;
