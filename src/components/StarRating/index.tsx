import useRating from "../../hooks/useRating";
import { Star } from "../Star";
import styles from "./style.module.css";

export const StarRating = () => {
  const [, dispatch] = useRating();

  return (
    <div className={styles.container}>
      {[...Array(5)].map((_star, index) => {
        const currentRating = index + 1;

        return (
          <Star
            key={index}
            currentRating={currentRating}
            onClick={() =>
              dispatch({ type: "set_rating", number: currentRating })
            }
          />
        );
      })}
    </div>
  );
};
