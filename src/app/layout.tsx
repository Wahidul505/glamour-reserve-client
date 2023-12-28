import Providers from "@/lib/Providers";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/ui/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Glamour Reserve",
  description: "Glamour Reserve at your Makeover Service",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen pb-16 md:pb-20 lg:pb-24">
          <Providers>{children}</Providers>
        </div>
        <Footer />
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
