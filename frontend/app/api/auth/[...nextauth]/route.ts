import { prismaClient } from "@/app/lib/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { NextResponse } from "next/server";

const handler = NextAuth({
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID ?? "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
  })
],
secret:process.env.NEXTAUTH_SECRET ?? "secret",
callbacks:{
  async signIn(params){
    const email = params.user.email
    if (!email)
      return false; 

    try {
      await prismaClient.user.upsert({
        where:{email},
        create:{ email,
        provider:"Google"},
        update:{},
      
    })
    } catch (e) {
    console.error("signIn failed", e);
    return false
    }
     return true;
  }
}

})

export { handler as GET, handler as POST }