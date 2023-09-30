import { PiArrowRight } from "react-icons/pi";
import styles from "./styles.module.css";

interface props {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: props) => {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        <p className={styles.label}>{label}</p>
        <PiArrowRight />
      </button>
    </>
  );
};
