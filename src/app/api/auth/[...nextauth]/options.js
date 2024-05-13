import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { User, dbconnect } from "../../signup/route";
export const Options = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.GIT_ID,
      clientSecret: process.env.GIT_SECRET,
    }),
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "string",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "string",
          placeholder: "password",
        },
      },
      async authorize(credentials, req) {
        await dbconnect()
       const user = await User.findOne({ email: credentials.email });
        
        const { email, password } = credentials;
        if (email == user.email && password == user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret:process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages:{
    signIn:'/auth/signin',
    error:'/auth/error'
  }
};
