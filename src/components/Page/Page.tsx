import { Color3 } from "@/utility/color";
import { useEffect, useRef } from "react";
import styles from "./Page.module.css";

export default function Page({
  children,
  color,
  bg,
  scroll,
  preview = false,
  footer = false,
  floaty = false,
  id,
}: {
  children?: React.ReactNode;
  color?: Color3;
  bg?: string;
  scroll: HTMLElement | null;
  preview?: boolean;
  footer?: boolean;
  floaty?: boolean;
  id?: string;
}) {
  const pageobj = useRef<HTMLDivElement>(null);
  const pageScrollAnim = useRef(0);
  useEffect(() => {
    if (scroll == null) return;
    const handler = () => {
      if (pageobj.current == null) return;
      pageobj.current.style.backgroundPositionY =
        -(pageobj.current.offsetTop - scroll.scrollTop) / 2 + "px";
      pageScrollAnim.current = requestAnimationFrame(handler);
    };
    pageScrollAnim.current = requestAnimationFrame(handler);
    // return cancelAnimationFrame(pageScrollAnim.current);
  }, [scroll]);
  return (
    <div
      id={id}
      ref={pageobj}
      className={`${styles.Page} ${preview ? styles.PagePreview : ""} ${
        footer ? styles.PageFooter : ""
      } ${floaty ? styles.PageSpace : ""} block`}
      style={
        {
          "--backgroundColor": "#" + color?.darken(75).toHex(),
          "--color": "#" + color?.toHex(),
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
