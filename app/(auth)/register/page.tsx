// app/(auth)/register/page.tsx

import RegisterForm from "@/components/register/RegisterForm";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  "use server";

  const email = (formData.get("email") as string | null)?.trim();
  const password = formData.get("password") as string | null;
  const confirmPassword = formData.get("confirm-password") as string | null;

  if (password !== confirmPassword) {
    console.error("Passwords do not match");
    return;
  }

  if (!email || !password) {
    console.error("Email or password missing");
    return;
  }

  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Register error:", error.message);
    return;
  }

  redirect("/");
}

export default function RegisterPage() {
  return <RegisterForm action={register} />;
}
