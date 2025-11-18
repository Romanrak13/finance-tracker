// app/(auth)/layout.tsx
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/auth";


export default async function AuthLayout({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();

  if (user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      {children}
    </div>
  );
}