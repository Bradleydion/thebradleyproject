// src/app/layout.tsx
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Bradley Project",
  description: "A queer-led creative company built to publish stories, develop digital tools, and support artists, writers, performers, and small businesses.",
  verification: {
    google: "AUg8WzDPtaLKY5rkweWHDOOM39yWXb3u3aidzMhhjbs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-tbp-bg text-tbp-soft font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
