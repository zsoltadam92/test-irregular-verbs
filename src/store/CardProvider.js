import { useContext, useEffect, useReducer, useRef } from "react";
import { getRandomVerbs, getVerbForm } from "../helper";
import IRREGULAR_VERBS from "../irregularVerbs";
import CardContext from "./card-context";
import wrongAnswerSoundEffect from "../audio/mixkit-wrong-electricity-buzz-955.wav";
import SettingsContext from "./settings-context";

const CardProvider = (props) => {
  const verbInputRef = useRef(null);
  const settingsCtx = useContext(SettingsContext);
  const { formValues } = settingsCtx;
  console.log(settingsCtx.formValues.numberOfVerbs);

  const initialState = {
    selectedVerbs: getRandomVerbs(IRREGULAR_VERBS, 10),
    currentVerbIndex: 0,
    isChecked: false,
    verbForm: getVerbForm(),
    answerState: "",
    isFinished: false,
    currentPoint: 0,
    progress: 0,
    isPlaying: true,
    key: 0,
    remainingTime: 30,
  };

  const cardFormReducer = (state, action) => {
    if (action.type === "START") {
      return {
        ...state,
        selectedVerbs: getRandomVerbs(
          IRREGULAR_VERBS,
          formValues.numberOfVerbs
        ),
        verbForm: getVerbForm(formValues.verbFormData),
        remainingTime: formValues.time,
      };
    }
    if (action.type === "BACK") {
      return {
        ...state,
        selectedVerbs: getRandomVerbs(
          IRREGULAR_VERBS,
          formValues.numberOfVerbs
        ),
        currentVerbIndex: 0,
        isChecked: false,
        verbForm: getVerbForm(formValues.verbFormData),
        answerState: "",
        isFinished: false,
        currentPoint: 0,
        progress: 0,
        isPlaying: true,
        key: 0,
        remainingTime: formValues.time,
      };
    }

    if (action.type === "COMPLETE_COUNTDOWN") {
      return {
        ...state,
        remainingTime: 0,
        key: state.key + 1,
      };
    }
    if (action.type === "CHECK_ANSWER") {
      return {
        ...state,
        isChecked: true,
        answerState: action.answerState,
        currentPoint: state.currentPoint + action.checkAnswer,
        isPlaying: false,
      };
    }
    if (action.type === "NEXT_VERB") {
      return {
        ...state,
        currentVerbIndex: state.currentVerbIndex + 1,
        isChecked: false,
        verbForm: action.verbForm,
        answerState: "",
        progress: state.progress + 1,
        isPlaying: true,
        key: state.key + 1,
        remainingTime: formValues.time,
      };
    }

    if (action.type === "FINISH") {
      return {
        ...state,
        currentVerbIndex: state.currentVerbIndex,
        isFinished: true,
      };
    }

    if (action.type === "TRY_AGAIN") {
      return {
        selectedVerbs: getRandomVerbs(
          IRREGULAR_VERBS,
          formValues.numberOfVerbs
        ),
        currentVerbIndex: 0,
        isChecked: false,
        verbForm: getVerbForm(formValues.verbFormData),
        answerState: "",
        isFinished: false,
        currentPoint: 0,
        progress: 0,
        isPlaying: true,
        key: 0,
        remainingTime: formValues.time,
      };
    }

    return initialState;
  };

  const [cardFormState, dispatchCardFormAction] = useReducer(
    cardFormReducer,
    initialState
  );

  const {
    selectedVerbs,
    currentVerbIndex,
    isChecked,
    verbForm,
    answerState,
    isFinished,
    currentPoint,
    progress,
    isPlaying,
    key,
    remainingTime,
  } = cardFormState;

  const startHandler = () => {
    dispatchCardFormAction({ type: "START" });
  };
  const backHandler = () => {
    dispatchCardFormAction({ type: "BACK" });
  };

  const checkHandler = (event) => {
    event.preventDefault();

    const isCorrect =
      verbInputRef.current.value.trim().toLowerCase() ===
      selectedVerbs[currentVerbIndex][verbForm];
    dispatchCardFormAction({
      type: "CHECK_ANSWER",
      answerState: isCorrect ? "correct" : "incorrect",
      checkAnswer: isCorrect ? 1 : 0,
    });

    if (isCorrect) {
      let utterance = new SpeechSynthesisUtterance(verbInputRef.current.value);
      speechSynthesis.speak(utterance);
    } else {
      new Audio(wrongAnswerSoundEffect).play();
    }
  };

  const nextVerbHandler = () => {
    dispatchCardFormAction({
      type: "NEXT_VERB",
      verbForm: getVerbForm(formValues.verbFormData),
    });
    verbInputRef.current.value = "";
    if (currentVerbIndex === selectedVerbs.length - 1) {
      dispatchCardFormAction({ type: "FINISH" });
    }
  };

  const completeCountdownHandler = () => {
    dispatchCardFormAction({ type: "COMPLETE_COUNTDOWN" });
  };

  const tryAgainHandler = () => {
    dispatchCardFormAction({ type: "TRY_AGAIN" });
  };

  useEffect(() => {
    verbInputRef.current?.focus();

    return () => {
      verbInputRef.current?.blur();
    };
  }, [currentVerbIndex]);

  useEffect(() => {
    if (remainingTime === 0) {
      checkHandler({ preventDefault: () => {} });
    }
  }, [remainingTime]);

  const cardContext = {
    selectedVerbs,
    currentVerbIndex,
    isChecked,
    verbForm,
    answerState,
    isFinished,
    currentPoint,
    progress,
    isPlaying,
    key,
    remainingTime,
    checkVerb: checkHandler,
    nextVerb: nextVerbHandler,
    tryAgain: tryAgainHandler,
    completeCountdown: completeCountdownHandler,
    verbInputRef,
    start: startHandler,
    back: backHandler,
  };

  return (
    <CardContext.Provider value={cardContext}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardProvider;
