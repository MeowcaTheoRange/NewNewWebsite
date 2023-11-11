import "@/styles/globals.css";
import fonts from "@/utility/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeowcaTheoRange",
  description: "hehe :3c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
