import { Color3 } from "@/utility/color";
import styles from "./ColourChip.module.css";

export default function ColourChip({
  colour,
  children,
}: {
  colour: Color3;
  children?: React.ReactNode;
}) {
  const calcTextColor = +(Math.max(...colour.toRGB()) <= 127);
  return (
    <div
      style={
        {
          "--mainColour": "#" + colour.toHex(),
          color:
            "#" +
            new Color3(calcTextColor, calcTextColor, calcTextColor).toHex(),
        } as any
      }
      className={styles.ColourChip}
    >
      {children}
      <p>{"#" + colour.toHex()}</p>
    </div>
  );
}
