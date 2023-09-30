import useRating from "../../../hooks/useRating";
import { Button } from "../../Button";
import { StarRating } from "../../StarRating";
import styles from "./styles.module.css";

export const Review = () => {
  const [{ rating }, dispatch] = useRating();

  return (
    <div className={styles.review}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 className="heading">Avalie o produto</h1>
          <p className="body">
            O que você achou do produto ?
            <span style={{ color: "var(--brand-purple)" }}>
              Smartwatch Amazfit Bip U Pro
            </span>
            ?
          </p>
        </div>

        <div className={styles.ratingContainer}>
          <StarRating />
          <div className={styles.rating}>
            <span className="span">Ruim</span>
            <span className="span">Ótimo</span>
          </div>
        </div>
      </div>

      <Button
        label="Continuar"
        onClick={() => dispatch({ type: "change_stage" })}
        disabled={rating <= 0 ? true : false}
      />
    </div>
  );
};
