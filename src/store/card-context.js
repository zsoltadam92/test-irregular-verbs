import React from "react";
import { getRandomVerbs, getVerbForm } from "../helper";
import IRREGULAR_VERBS from "../irregularVerbs";

const CardContext = React.createContext({
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
  checkVerb: (event) => {},
  nextVerb: () => {},
  tryAgain: () => {},
  start: () => {},
  back: () => {},
});

export default CardContext;
