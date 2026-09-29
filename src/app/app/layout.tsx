import { AppShell } from "@/components/layout/app-shell";
import { AppGuard } from "./app-guard";
import { ProfileProvider } from "./profile-context";

export default function AppLayout({ children }: LayoutProps<"/app">) {
  return (
    <AppShell>
      <AppGuard>
        <ProfileProvider>{children}</ProfileProvider>
      </AppGuard>
    </AppShell>
  );
}
