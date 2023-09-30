import { PiX } from "react-icons/pi";

import styles from "./style.module.css";
import useRating from "../../../hooks/useRating";

export const Thanks = () => {
  const [, dispatch] = useRating();

  return (
    <div className={styles.container}>
      <button
        className={styles.closeBtn}
        onClick={() => dispatch({ type: "close_card" })}
      >
        <PiX />
      </button>
      <h1 className="heading">Obrigado pela avaliação!</h1>
      <p className="body">Volte sempre 👋!</p>
    </div>
  );
};
