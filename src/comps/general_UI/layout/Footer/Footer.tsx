import styles from "./Footer.module.css";

// Copyright footer
export default function Footer() {
  return (
    <footer className={styles.foot}>
      {/* Footer copyright text */}
      <p>&copy; Ethan Kletschke, {/* Copyright year */ new Date().getFullYear()}</p>

      {/* Version number in footer */}
      <p className={styles.version}>v3.4</p> {/* NB -> Remember to update */}
    </footer>
  );
}
