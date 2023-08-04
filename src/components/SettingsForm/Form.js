import { useContext } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./Form.module.css";
import useInput from "../../hook/use-input";

import SettingsContext from "../../store/settings-context";
import { useNavigate } from "react-router-dom";
import CardContext from "../../store/card-context";

const Form = () => {
  const settingsCtx = useContext(SettingsContext);
  const cardCtx = useContext(CardContext);

  const {
    enteredValue: enteredNumberOfVerbs,
    isValid: numberOfVerbsIsValid,
    hasError: numberOfVerbsHasError,
    valueChangeHandler: numberOfVerbsChangeHandler,
    inputBlurHandler: numberOfVerbsBlurHandler,
    reset: resetNumberOfVerbsInput,
  } = useInput((enteredValue) => enteredValue >= 5 && enteredValue <= 50);

  const {
    enteredValue: enteredTime,
    isValid: timeIsValid,
    hasError: timeHasError,
    valueChangeHandler: timeChangeHandler,
    inputBlurHandler: timeBlurHandler,
    reset: resetTimeInput,
  } = useInput((enteredValue) => enteredValue >= 5 && enteredValue <= 60);

  let formIsValid = false;

  if (numberOfVerbsIsValid && timeIsValid) {
    formIsValid = true;
  }

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    settingsCtx.getFormData({
      numberOfVerbs: Number(formData.get("numberOfVerbs")),
      verbFormData: formData.get("verbForm"),
      time: Number(formData.get("time")),
    });

    if (!numberOfVerbsIsValid || !timeIsValid) {
      return;
    }

    resetNumberOfVerbsInput();
    resetTimeInput();

    cardCtx.start();
    navigate("/game");
  };

  const backNavigateHandler = () => {
    navigate("/");
  };

  const numberOfVerbsClasses = `${styles["form-control"]} ${
    numberOfVerbsHasError ? styles.invalid : ""
  }`;

  const timeClasses = `${styles["form-control"]} ${
    timeHasError ? styles.invalid : ""
  }`;

  return (
    <Card className={styles.formCard}>
      <h1 className={styles.formTitle}>Settings</h1>
      <form onSubmit={submitHandler}>
        <div className={numberOfVerbsClasses}>
          <label htmlFor="numberOfVerbs">Number of verbs:</label>
          <input
            name="numberOfVerbs"
            type="number"
            id="numberOfVerbs"
            onChange={numberOfVerbsChangeHandler}
            onBlur={numberOfVerbsBlurHandler}
            value={enteredNumberOfVerbs}
          />
        </div>
        {numberOfVerbsHasError && (
          <p className={styles["error-text"]}>Min. 5 - max. 50</p>
        )}
        <div className={timeClasses}>
          <label htmlFor="verbForm">Verb form: </label>
          <select name="verbForm" id="verbForm">
            <option value="random">random</option>
            <option value="v2">v2</option>
            <option value="v3">v3</option>
          </select>
        </div>
        <div className={styles["form-control"]}>
          <label htmlFor="time">Time:</label>
          <input
            type="number"
            id="time"
            name="time"
            placeholder="sec/card"
            onChange={timeChangeHandler}
            onBlur={timeBlurHandler}
            value={enteredTime}
          />
        </div>
        {timeHasError && (
          <p className={styles["error-text"]}>Min. 5 - max. 60</p>
        )}
        <div className={styles.actions}>
          <Button
            type="submit"
            className={styles.action}
            disabled={!formIsValid}
          >
            Start
          </Button>
          <Button className={styles.action} onClick={backNavigateHandler}>
            Back
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
