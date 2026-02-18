import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "../index.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "ResearchGuide - The Bridge of Scientific Excellence",
  description:
    "Access elite R&D talent and strategic expertise through a verified corridor between Africa and the Gulf",
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
