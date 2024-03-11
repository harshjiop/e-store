import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { User } from "@/models/User.model";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/MongoConnect"
export const authOption=({
  secret: process.env.SECTET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "useremail@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const {email,password}=credentials
        const email = credentials?.email;
        const password = credentials?.password;
        try {
          await mongoose.connect(process.env.MONGODB_URI);
          const user = await User.findOne({ email });

          if (user && bcrypt.compareSync(password, user.password)) {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
        
        // console.log(credentials)
        return null;
      },
    }),
  ],
});
const handler=NextAuth(authOption)
export { handler as GET, handler as POST };