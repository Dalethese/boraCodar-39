import { PiArrowRight } from "react-icons/pi";
import styles from "./styles.module.css";

interface props {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled }: props) => {
  return (
    <>
      <button className={styles.button} onClick={onClick} disabled={disabled}>
        <p className={styles.label}>{label}</p>
        <PiArrowRight />
      </button>
    </>
  );
};
