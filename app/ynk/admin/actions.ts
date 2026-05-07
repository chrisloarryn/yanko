"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") || "");
  const expectedPassword = process.env.YNK_ADMIN_PASSWORD || "admin";

  if (password !== expectedPassword) {
    redirect("/ynk/admin/login?error=1");
  }

  const cookieStore = await cookies();
  cookieStore.set("ynk-admin", "authenticated", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  redirect("/ynk/admin");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete("ynk-admin");
  redirect("/ynk/admin/login");
}
