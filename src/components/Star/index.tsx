import useRating from "../hooks/useRating";
import { PiStarFill } from "react-icons/pi";
import styles from "./style.module.css";

interface props {
  onClick: () => void;
  currentRating: number;
}

export const Star = ({ onClick, currentRating }: props) => {
  const [{ hover, rating }, dispatch] = useRating();

  return (
    <label>
      <input type="radio" name="rating" value={rating} onClick={onClick} />
      <PiStarFill
        className={styles.star}
        size={40}
        color={
          currentRating <= (hover || rating)
            ? "var(--rating-yellow)"
            : "var(--base-gray-200)"
        }
        onMouseEnter={() => dispatch({ type: "set_hover", value: currentRating })}
        onMouseLeave={() => dispatch({ type: "set_hover", value: 0 })}
      />
    </label>
  );
};
