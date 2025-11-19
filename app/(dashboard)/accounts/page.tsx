import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function accountsPage() {

    const supabase = await createSupabaseServerClient();


    return <div>accounts</div>;
}