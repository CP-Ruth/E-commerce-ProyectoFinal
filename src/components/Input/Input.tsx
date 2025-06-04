import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface PropsInput {
  value: string | number;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  text: string;
  type?: string
}

const Input: FC<PropsInput> = ({ name, value, onChange, text, type }) => {
  return (
    <div className={styles.item}>
      <label htmlFor="color">{text}: </label>
      <input
        id={name}
        type={type || "text"}
        name={name}
        placeholder={text}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default Input;
