import { ChangeEvent, FC } from "react";
import styles from "./Select.module.css";

interface PropsSelect {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  text: string;
  options: string[];
}

const Select: FC<PropsSelect> = ({ name, value, onChange, text, options }) => {
  return (
    <div className={styles.item}>
      <label htmlFor={name}>{text}: </label>
      <select name={name} id={name} value={value} onChange={onChange} required>
        {options.length &&
          options.map((option, key) => (
            <option key={key} value={option.toUpperCase()}>{option}</option>
          ))}
      </select>
    </div>
  );
};

export default Select;
