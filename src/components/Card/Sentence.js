import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import styles from "./Sentence.module.css";
import ReactCountryFlag from "react-country-flag";
import { speakHandler } from "../../helper";

const Sentence = (props) => {
  return (
    <React.Fragment>
      <div
        className={styles.sentenceEn}
        onClick={() => speakHandler(props.exampleSentenceEn)}
      >
        <FontAwesomeIcon icon={faVolumeHigh} className={styles.volume} />
        {props.exampleSentenceEn}
      </div>
      <div>
        <ReactCountryFlag countryCode="HU" svg />
        <span className={styles.sentenceHu}>({props.exampleSentenceHu})</span>
      </div>
    </React.Fragment>
  );
};

export default Sentence;
