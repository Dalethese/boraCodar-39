import useRating from "../../hooks/useRating";
import { PiArrowLeft } from "react-icons/pi";
import { Review } from "./Review";
import styles from "./styles.module.css";
import { Feedback } from "./Feedback";

// interface props {}

export const Card = () => {
  const [{ stage }, dispatch] = useRating();

  return (
    <div className={styles.card}>
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
      </div>
    </div>
  );
};
