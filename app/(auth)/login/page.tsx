// app/(auth)/login/page.tsx

import LoginForm from "@/components/login/LoginForm";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


export async function login(formData: FormData) {
  "use server";

  const email = (formData.get("email") as string | null)?.trim();
  const password = formData.get("password") as string | null;

  if (!email || !password) {
    console.error("Email or password missing");
    return;
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error("Login error:", error.message);
 
    return;
  }

  redirect("/");
}

export default function LoginPage() {
  return <LoginForm action={login} />;
}