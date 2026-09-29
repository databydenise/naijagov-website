import type { Metadata } from "next";
import { AppPlaceholder } from "@/components/layout/app-placeholder";

export const metadata: Metadata = {
  title: "My Information — NaijaGov",
};

export default function InformationPage() {
  return (
    <AppPlaceholder
      title="My Information"
      description="The details government forms ask for, kept in one place. Coming soon."
    />
  );
}
