// app/(auth)/layout.tsx
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUserSilent } from "@/lib/auth/auth";


export default async function AuthLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUserSilent();

  if (user) {
    redirect("/");
  }

  return <>{children}</>;
}