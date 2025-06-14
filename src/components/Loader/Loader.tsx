import styles from "./Loader.module.css"

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderContainer}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  );
};

export default Loader;