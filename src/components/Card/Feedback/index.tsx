import { Button } from "../../Button";
import { TextArea } from "../../TextArea";
import styles from "./style.module.css";

export const Feedback = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className="heading">Deixe um comentário</h1>
        <p className="body">Conte sobre o motivo da sua avaliação</p>
      </div>

      <TextArea />

      <Button label="Enviar" onClick={() => console.log("enviou")} />
    </div>
  );
};
