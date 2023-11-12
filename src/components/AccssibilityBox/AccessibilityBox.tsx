"use client";
import { useEffect, useRef } from "react";
import Floaty from "../Floaty/Floaty";

export default function AccessibilityBox() {
  const checkbox = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (window == null) return;
    if (window?.localStorage.getItem("a11y")) {
      document.body.parentElement?.classList.add("a11y");
      if (checkbox.current != null) checkbox.current.checked = true;
    }
  }, []);
  return (
    <Floaty top>
      <input
        id="accessibility"
        type="checkbox"
        ref={checkbox}
        onClick={function (x) {
          if (window == null) return;
          if ((x.target as HTMLInputElement).checked) {
            document.body.parentElement?.classList.add("a11y");
            window?.localStorage.setItem("a11y", "a11y");
          } else {
            document.body.parentElement?.classList.remove("a11y");
            window?.localStorage.setItem("a11y", "");
          }
        }}
      />
      <label htmlFor="accessibility">Accessibility</label>
    </Floaty>
  );
}
