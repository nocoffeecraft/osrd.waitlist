import "./globals.css";
import { Outfit } from "next/font/google";

const outfit = Outfit({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Waitlist | OSRD",
  description: "Join the Web3 research revolution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <body className="bg-white">{children}</body>
    </html>
  );
}
