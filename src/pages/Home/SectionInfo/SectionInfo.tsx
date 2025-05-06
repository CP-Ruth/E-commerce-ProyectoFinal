import { FC, ReactNode } from "react";
import styles from './SectionInfo.module.css'

interface PropsSectionInfo {
  title?: string;
  children: ReactNode;
}

export const SectionInfo: FC<PropsSectionInfo> = ({ title, children }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};


