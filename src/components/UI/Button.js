import styles from "./Button.module.css";

const Button = (props) => {
  const classNames = `${styles.button} ${props.className || ""}`;
  return (
    <button
      className={classNames}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
