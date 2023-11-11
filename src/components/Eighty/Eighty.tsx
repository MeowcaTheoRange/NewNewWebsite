import Link from "next/link";
import styles from "./Eighty.module.css";

export default function Eighty({
  url,
  img,
  alt,
}: {
  url?: string;
  img: string;
  alt?: string;
}) {
  return url ? (
    <Link className={styles.Eighty} href={url} target="_blank">
      <img src={img} alt={alt} title={alt} />
    </Link>
  ) : (
    <span className={styles.Eighty}>
      <img src={img} alt={alt} title={alt} />
    </span>
  );
}
