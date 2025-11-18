import type { Metadata } from "next";
import { MUIThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Tracker",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MUIThemeProvider>
          {children}
        </MUIThemeProvider>
      </body>
    </html>
  );
}