import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.author}>
        <span>Муртазин Кирилл Романович</span>
        <div className={styles.divider}></div>
        <span>РИ-230935</span>
      </div>
    </footer>
  );
}

export default Footer;
