import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Fathom from "./Fathom";
import "@src/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Fathom />
        {children}
      </body>
    </html>
  );
}
