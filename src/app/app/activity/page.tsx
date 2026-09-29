import type { Metadata } from "next";
import { AppPlaceholder } from "@/components/layout/app-placeholder";

export const metadata: Metadata = {
  title: "Activity — NaijaGov",
};

export default function ActivityPage() {
  return (
    <AppPlaceholder
      title="Activity"
      description="A history of the portal tasks NaijaGov helped you with. Coming soon."
    />
  );
}
