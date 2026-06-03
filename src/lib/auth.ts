import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import * as schema from "@/db/schema";

if (!process.env.GITHUB_CLIENT_ID) {
throw new Error("Missing GITHUB_CLIENT_ID");
}

if (!process.env.GITHUB_CLIENT_SECRET) {
throw new Error("Missing GITHUB_CLIENT_SECRET");
}

if (!process.env.GOOGLE_CLIENT_ID) {
throw new Error("Missing GOOGLE_CLIENT_ID");
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
throw new Error("Missing GOOGLE_CLIENT_SECRET");
}

export const auth = betterAuth({
   socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET , 
        }, 
         google: { 
            clientId: process.env.GOOGLE_CLIENT_ID ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }, 
    },
    emailAndPassword: { 
    enabled: true, 
  }, 
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
         schema: {
          ...schema,
         }
    }),
});