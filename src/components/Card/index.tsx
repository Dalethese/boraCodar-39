import useRating from "../../hooks/useRating";
import { PiArrowLeft } from "react-icons/pi";

import { Review } from "./Review";
import { Feedback } from "./Feedback";
import { Thanks } from "./Thanks";

import styles from "./styles.module.css";

export const Card = () => {
  const [{ stage, closeCard }, dispatch] = useRating();

  return (
    <div className={`${styles.card} ${closeCard ? styles.closeAnimation : ""}`}>
      {stage === "feedback" && (
        <button
          className={styles.backBtn}
          onClick={() => dispatch({ type: "change_stage" })}
        >
          <PiArrowLeft />
        </button>
      )}

      <div className={styles.product}>
        <img src="/smartwatch.png" alt="smartwatch" />
      </div>

      <div className={styles.content}>
        {stage === "rating" && <Review />}
        {stage === "feedback" && <Feedback />}
        {stage === "thanks" && <Thanks />}
      </div>
    </div>
  );
};
