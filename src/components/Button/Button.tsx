import { FC } from "react";
import styles from './Button.module.css'

interface PropsButton {
  text: string;
}

export const Button: FC<PropsButton> = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};