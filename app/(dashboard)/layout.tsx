// app/(dashboard)/layout.tsx
import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/auth";
import Link from "next/link";


export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex bg-slate-950 text-slate-50">
      <aside className="w-64 border-r border-slate-800 p-4">
        <div className="font-semibold text-lg mb-6">Finance Tracker</div>

        <nav className="space-y-2 text-sm">
          <Link href="/" className="block hover:text-sky-400">
            Dashboard
          </Link>
          <Link href="/transactions" className="block hover:text-sky-400">
            Transactions
          </Link>
          <Link href="/subscriptions" className="block hover:text-sky-400">
            Subscriptions
          </Link>
          <Link href="/insights" className="block hover:text-sky-400">
            AI Insights
          </Link>
          <Link href="/settings" className="block hover:text-sky-400">
            Settings
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}