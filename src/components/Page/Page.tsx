import { Color3 } from "@/utility/color";
import styles from "./Page.module.css";

export default function Page({
  children,
  color,
  bg,
  preview = false,
  footer = false,
  floaty = false,
  half = false,
  cut = false,
  id,
}: {
  children?: React.ReactNode;
  color?: Color3;
  bg?: string;
  preview?: boolean;
  footer?: boolean;
  floaty?: boolean;
  half?: boolean;
  cut?: boolean;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={`${styles.Page} ${cut ? styles.PageCut : ""} ${
        half ? styles.PageHalf : ""
      } ${preview ? styles.PagePreview : ""} ${
        footer ? styles.PageFooter : ""
      } ${floaty ? styles.PageSpace : ""} block PG-collapse-on-a11y`}
      style={
        {
          "--backgroundColor": "#" + color?.darken(75).toHex(),
          "--color": "#" + color?.toHex(),
          "--color-a11y": "#" + color?.lighten(75).toHex(),
          background: bg,
          backgroundColor: "#" + color?.darken(90).toHex(),
          color: "var(--color)",
        } as any
      }
    >
      {children}
    </div>
  );
}
