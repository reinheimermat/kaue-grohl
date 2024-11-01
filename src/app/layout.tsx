import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Kaue Grohl",
  description: "Kaue Grohl's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} antialiased scroll-smooth bg-zinc-950 text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
