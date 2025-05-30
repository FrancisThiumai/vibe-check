import type { Metadata } from "next";
import "./globals.css";
import MoodBackground from "./components/MoodBackground";

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
      <body className="min-h-screen font-[Inter] overflow-x-hidden relative">
        <MoodBackground />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
