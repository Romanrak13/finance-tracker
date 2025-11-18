// app/(auth)/register/page.tsx
import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase/server';

async function register(formData: FormData) {
  'use server';

  const email = (formData.get('email') as string | null)?.trim();
  const password = formData.get('password') as string | null;

  console.log(email, password, formData);

  if (!email || !password) {
    console.error('Email or password missing');
    return;
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Register error:', error.message);

    return;
  }
  redirect('/');
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md rounded-xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Create account</h1>

        <form className="space-y-4" action={register}>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              minLength={6}
              required
              className="w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-sky-500"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-sky-500 py-2 text-sm font-medium text-white hover:bg-sky-400"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
