import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { SessionToggle } from "@/components/dev/session-toggle";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SessionProvider } from "@/lib/auth/session-context";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "NaijaGov",
  description:
    "An independent browser extension that helps you understand and complete tasks on Nigerian government portals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <SessionProvider>
          <TooltipProvider delayDuration={200}>
            {children}
            {process.env.NODE_ENV !== "production" && <SessionToggle />}
          </TooltipProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
