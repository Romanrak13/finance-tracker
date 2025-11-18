// app/(auth)/login/page.tsx

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function login(formData: FormData) {
  'use server';

  const email = (formData.get('email') as string | null)?.trim();
  const password = formData.get('password') as string | null;

  if (!email || !password) {
    console.error('Email or password missing');
    return;
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Register error:', error.message);

    return;
  }
  redirect('/');
}
export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
      <h1 className="text-xl font-semibold mb-4">Sign in</h1>
      <form className="space-y-4" action={login}>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-sky-500 py-2 text-sm font-medium text-white hover:bg-sky-400"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
