import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByCredentials } from "./lib/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credential) => {
        console.log(credential);

        // procura usuario com credenciasis

        const user = await findUserByCredentials(
          credential.email as string,
          credential.password as string
        );

        return user;
      },
    }),
  ],
});
