import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "elisebuilds.com | Elise Verhoeye",
  description:
    "Websites, mobile apps, and workflow automation for businesses that want to run more smoothly.",
};

export const viewport: Viewport = {
  themeColor: "#fff7ef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
