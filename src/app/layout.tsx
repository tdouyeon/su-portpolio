import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SY PORTFOLIO",

  description: "이수연의 포트폴리오입니다.",
  icons: {
    icon: "/images/SY-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
