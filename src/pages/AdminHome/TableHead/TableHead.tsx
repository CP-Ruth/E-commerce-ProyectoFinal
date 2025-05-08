import { FC } from "react";
import styles from "./TableHead.module.css";

interface PropsHead {
  columns: string[];
}

const TableHead: FC<PropsHead> = ({ columns }) => {
  return (
    <tr className={styles.tableRow}>
      {columns && columns.map((column, id) => <th key={id}>{column}</th>)}
    </tr>
  );
};

export default TableHead;
