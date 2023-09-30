import { ChangeEvent } from "react";
import styles from "./style.module.css";

interface props {
  value: string;
  onChange: (ev: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = ({ value, onChange }: props) => {
  return (
    <textarea
      className={styles.textArea}
      placeholder="Escreva seu comentário aqui."
      value={value}
      onChange={onChange}
    ></textarea>
  );
};
