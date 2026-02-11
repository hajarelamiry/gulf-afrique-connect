import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "../src/index.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "ResearchGuide - The Bridge of Scientific Excellence",
  description:
    "Access the Top 5% of R&D talent and world-class strategic expertise between Africa and the Gulf",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientLayout>
          {children}
          <Toaster position="top-center" />
        </ClientLayout>
      </body>
    </html>
  );
}
