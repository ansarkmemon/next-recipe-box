import { handleAuth } from "@auth0/nextjs-auth0";
import { NextResponse } from "next/server";

// export async function GET() {
//   console.log("hello");
//   return NextResponse.json({ message: "hello" });
// }

export const GET = handleAuth();
