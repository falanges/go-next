import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CoursesPage from './courses/page';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Created by Us",
  description: "Generated with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  <CoursesPage />
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
