import styles from "./loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={styles.fixed_loader}>
        <div className={styles.lds_roller}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
