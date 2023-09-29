import styles from "./style.module.css";

export const TextArea = () => {
  return (
    <textarea
      className={styles.textArea}
      placeholder="Escreva seu comentário aqui."
    ></textarea>
  );
};
