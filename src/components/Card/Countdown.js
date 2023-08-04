import { useContext } from "react";
import CardContext from "../../store/card-context";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Countdown.module.css";

const Countdown = () => {
  const cardCtx = useContext(CardContext);

  const { isPlaying, key, remainingTime, completeCountdown } = cardCtx;

  return (
    <div className={styles["countdown-wrapper"]}>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={remainingTime}
        initialRemainingTime={remainingTime}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[30, 15, 5, 0]}
        size={40}
        strokeWidth={5}
        isSmoothColorTransition={false}
        key={key}
        onComplete={completeCountdown}
      >
        {({ remainingTime }) => <p>{remainingTime}</p>}
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
