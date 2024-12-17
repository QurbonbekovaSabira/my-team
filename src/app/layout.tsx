import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "My team",
  description: "My team ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-bg-primary justify-between min-h-screen">
        <div>
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
