import { PiArrowRight } from 'react-icons/pi'
import styles from './styles.module.css'

interface props {
  label: string;
}

export const Button = ({ label }: props) => {
  return (
    <>
      <button className={styles.button}>
        <p className={styles.label}>{label}</p>
        <PiArrowRight /> </button>
    </>
  )
}