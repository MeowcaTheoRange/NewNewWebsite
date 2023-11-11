import { Color3 } from "@/utility/color";
import styles from "./Nav.module.css";

export default function Nav({
  children,
  color,
}: {
  children?: React.ReactNode;
  color?: Color3;
}) {
  return (
    <div
      className={styles.Nav}
      style={{
        backgroundColor: "#" + color?.darken(90).toHex(),
        color: "#" + color?.lighten(80).toHex(),
      }}
    >
      {children}
    </div>
  );
}
