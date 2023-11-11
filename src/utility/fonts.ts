import { Lexend_Deca } from "next/font/google";
import Renogare from "next/font/local";

const lexend_deca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-Lexend-Deca",
});
const lexend_deca_backup = Lexend_Deca({
  // some dumb error
  subsets: ["latin"],
  variable: "--font-Lexend-Deca",
});
const renogare = Renogare({
  src: "./../../public/fonts/Renogare/Renogare.woff2",
  variable: "--font-Renogare",
});

const fonts = `${lexend_deca.variable} ${lexend_deca_backup.variable} ${renogare.variable}`;
export default fonts;
