import { FC } from "react";
import styles from './Button.module.css'

interface PropsButton {
  text: string;
  onClick?: () => void;
}

const Button: FC<PropsButton> = ({ text, onClick }) => {
  return <button className={styles.button} onClick={onClick}>{text}</button>;
};

export default Button;