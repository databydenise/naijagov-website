import type { Metadata } from "next";
import { AppPlaceholder } from "@/components/layout/app-placeholder";

export const metadata: Metadata = {
  title: "Settings — NaijaGov",
};

export default function SettingsPage() {
  return (
    <AppPlaceholder
      title="Settings"
      description="Preferences and connected browsers. Coming soon."
    />
  );
}
