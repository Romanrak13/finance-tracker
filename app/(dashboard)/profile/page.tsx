import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import ProfileForm from "@/components/profile/ProfileForm";

export async function updateProfile(formData: FormData) {
  "use server";
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const full_name =
    (formData.get("full_name") as string | null)?.trim() ?? null;
  const file = formData.get("avatar") as File | null;

  const updatePayload: Record<string, unknown> = {};

  if (file && file.size > 0) {
    try {
      const ext = file.name.split(".").pop() || "png";
      const filePath = `${user.id}/${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("profile-icons")
        .upload(filePath, file, {
          cacheControl: "3600",
          upsert: true,
        });

      if (uploadError) {
        console.error("Avatar upload error:", uploadError.message);
      } else {
        const {
          data: { publicUrl },
        } = supabase.storage.from("profile-icons").getPublicUrl(filePath);
        updatePayload.avatar_url = publicUrl;
      }
    } catch (e) {
      console.error("Avatar upload exception:", e);
    }
  }

  if (full_name) {
    updatePayload.full_name = full_name;
  }

  if (Object.keys(updatePayload).length > 0) {
    const { error } = await supabase
      .from("profiles")
      .update(updatePayload)
      .eq("id", user.id);

    if (error) {
      console.error("Profile update error:", error.message);
    } else {
      revalidatePath("/profile");
    }
  }
}

export default async function ProfilePage() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <ProfileForm
      action={updateProfile}
      email={user.email ?? ""}
      initialName={profile?.full_name ?? ""}
      initialAvatarUrl={profile?.avatar_url ?? ""}
    />
  );
}
