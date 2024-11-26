"use server";

import db from "@/lib/db";

import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  _prevState: any,
  formData: FormData
) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  console.log(data);

  if (!data.email || !data.name || !data.password) {
    return {
      mensage: "Preenca os dados",
      status: false,
    };
  }

  // usuario já existe
  const user = await db.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (user) {
    return {
      mensage: "User ja existe",
      status: false,
    };
  }

  // usuario não existe e vai ser criado

  await db.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: hashSync(data.password),
    },
  });

  return {
    mensage: "Usuario cadastrado com sucess",
    status: true,
  };
}
