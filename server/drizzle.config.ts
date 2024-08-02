import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "sqlite",
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver:'turso',
  dbCredentials:{
    url:process.env.DATABASE_URL as string, authToken: process.env.AUTH_TOKEN as string 
  }
})