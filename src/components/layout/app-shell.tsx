import type { ReactNode } from "react";
import { Container } from "@/components/ui/container";
import { AppNav } from "./app-nav";
import { Header } from "./header";

interface AppShellProps {
  children: ReactNode;
}

/**
 * The frame around every /app page: site header, account navigation, content.
 * Below 900px the navigation sits in a row above the content with a hairline
 * under it that spans the viewport, not the column.
 */
function AppShell({ children }: AppShellProps) {
  return (
    <>
      <Header />
      <div className="flex-1 overflow-x-clip">
        <Container className="nav:grid nav:grid-cols-[200px_minmax(0,1fr)] nav:gap-8 nav:py-6 stack:grid-cols-[240px_minmax(0,1fr)] stack:gap-12 stack:py-12">
          <div className="relative py-3 after:absolute after:bottom-0 after:left-[calc(50%-50vw)] after:h-px after:w-screen after:bg-rule nav:py-0 nav:after:hidden">
            <AppNav />
          </div>
          <main id="main" className="min-w-0 py-6 nav:py-0">
            {children}
          </main>
        </Container>
      </div>
    </>
  );
}

export { AppShell };
