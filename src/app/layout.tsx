import type { Metadata } from "next";
import cx from "classnames";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import Fathom from "./Fathom";
import "@src/styles/globals.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["600", "900"],
  variable: "--font-family-heading",
});
const redHatText = Red_Hat_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-family-body",
});

export const metadata: Metadata = {
  title: "George Smerin",
  description:
    "Helping frontend developers level up their skills in design, UX and animation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cx(redHatDisplay.variable, redHatText.variable)}>
        <Fathom />
        {children}
      </body>
    </html>
  );
}
