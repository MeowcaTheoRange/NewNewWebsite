import styles from "./Time.module.css";

export default function Time({ time, date }: { time: string; date: string }) {
  return (
    <div className={styles.Time}>
      <h2>{time}</h2>
      <h3>{date}</h3>
      <h4 className="hv">Central Time (Minnesota)</h4>
    </div>
  );
}
