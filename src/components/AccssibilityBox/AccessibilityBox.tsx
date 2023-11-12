"use client";
import Floaty from "../Floaty/Floaty";

export default function AccessibilityBox() {
  if (window.localStorage.getItem("a11y"))
    document.body.parentElement?.classList.add("a11y");
  return (
    <Floaty top>
      <input
        id="accessibility"
        type="checkbox"
        onClick={function (x) {
          if ((x.target as HTMLInputElement).checked) {
            document.body.parentElement?.classList.add("a11y");
            window.localStorage.setItem("a11y", "a11y");
          } else {
            document.body.parentElement?.classList.remove("a11y");
            window.localStorage.setItem("a11y", "");
          }
        }}
        defaultChecked={window.localStorage.getItem("a11y") == "a11y"}
      />
      <label htmlFor="accessibility">Accessibility</label>
    </Floaty>
  );
}
