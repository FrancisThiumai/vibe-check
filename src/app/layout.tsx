import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vibe Check - What's Your Energy?",
  description: "Take this fun quiz to discover and share your current vibe with friends!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 animate-gradient-slow font-[Inter] overflow-x-hidden">
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
