import styles from "./Sides.module.css";

export default function Sides({
  start,
  end,
}: {
  start?: React.ReactNode;
  end?: React.ReactNode;
}) {
  return (
    <div className={`${styles.Sides} block`}>
      <div className={`${styles.SidesStart} block`}>{start}</div>
      <div className={`${styles.SidesEnd} block`}>{end}</div>
    </div>
  );
}
