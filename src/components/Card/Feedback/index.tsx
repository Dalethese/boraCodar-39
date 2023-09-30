import useRating from "../../../hooks/useRating";
import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import styles from "./style.module.css";

export const Feedback = () => {
  const [{ comment }, dispatch] = useRating();

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="heading">Deixe um comentário</h1>
        <p className="body">Conte sobre o motivo da sua avaliação</p>
      </div>

      <TextArea
        value={comment}
        onChange={(ev) =>
          dispatch({ type: "set_comment", comment: ev.target.value })
        }
      />

      <Button label="Enviar" onClick={() => dispatch({ type: "send" })} />
    </div>
  );
};
