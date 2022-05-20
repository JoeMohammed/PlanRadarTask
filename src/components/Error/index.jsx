import styles from "./error.module.css";

export default function Error({ children }) {
  return (
    <div className={styles.fixed_error}>
      <h3 className={styles.fixed_error_title}>{children}</h3>
    </div>
  );
}
