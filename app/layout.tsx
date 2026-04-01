import type { Metadata, Viewport } from "next";
import Script from "next/script";
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
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
