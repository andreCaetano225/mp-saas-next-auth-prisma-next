"use server";

import { signIn } from "@/auth";

export default async function loginAction(formData: FormData) {
  try {
    await signIn("credentials", formData);
    return {
      sucess: true,
    };
  } catch (e) {
    if (e.type === "CredentialsSignin") {
      return {
        sucess: false,
        error: "Dados errado",
      };
    }
  }
}
