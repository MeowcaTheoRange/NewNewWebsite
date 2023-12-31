import styles from "./Floaty.module.css";

export default function Floaty({
  children,
  top = false,
  important = false,
  start = false,
  keepFloat = false,
  sticky = false,
}: {
  children?: React.ReactNode;
  top?: boolean;
  important?: boolean;
  start?: boolean;
  keepFloat?: boolean;
  sticky?: boolean;
}) {
  return (
    <div
      className={`${styles.Floaty} ${important ? styles.FloatyImportant : ""} ${
        top ? styles.FloatyTop : ""
      } ${start ? styles.FloatyStart : ""} ${
        keepFloat ? styles.FloatyKeep : ""
      } ${sticky ? styles.FloatySticky : ""} FL-collapse-on-a11y`}
    >
      {children}
    </div>
  );
}
