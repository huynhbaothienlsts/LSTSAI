import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Khung chương trình giáo dục AI | Khối 6–12", description: "Không gian triển khai 84 tiết giáo dục AI dành cho giáo viên." };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="vi"><body>{children}</body></html>; }
