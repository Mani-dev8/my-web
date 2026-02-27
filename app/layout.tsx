import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEWAT",
  description: "Business website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
