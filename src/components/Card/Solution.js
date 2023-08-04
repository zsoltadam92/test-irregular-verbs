import React from "react";

import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import styles from "./Solution.module.css";

import Sentence from "./Sentence";
import VerbFormContent from "./VerbFormContent";

const Solution = (props) => {
  const verbForms = [
    { label: "v1", value: props.v1, icon: faVolumeHigh, form: "v1" },
    {
      label: "v2",
      value: props.simplePast,
      icon: faVolumeHigh,
      form: "simplePast",
    },
    {
      label: "v3",
      value: props.pastParticiple,
      icon: faVolumeHigh,
      form: "pastParticiple",
    },
  ];

  return (
    <React.Fragment>
      <div className={styles.verbForms}>
        {verbForms.map((form) => (
          <VerbFormContent
            key={form.form}
            label={form.label}
            value={form.value}
            icon={form.icon}
            isUsed={props.verbForm === form.form}
          />
        ))}
      </div>
      <Sentence
        exampleSentenceEn={props.exampleSentenceEn}
        exampleSentenceHu={props.exampleSentenceHu}
      />
    </React.Fragment>
  );
};

export default Solution;
