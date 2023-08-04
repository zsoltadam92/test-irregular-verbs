import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={styles[props.className]}
      type={props.type}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
});

export default Input;
