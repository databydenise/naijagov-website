import { redirect } from "next/navigation";

/** /app has no page of its own; the profile is the signed-in home. */
export default function AppIndexPage() {
  redirect("/app/profile");
}
