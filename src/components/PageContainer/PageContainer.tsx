import styles from "./PageContainer.module.css";

export default function PageContainer({
  children,
  id,
}: {
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className={`${styles.PageContainer}`}>
      {children}
    </div>
  );
}
