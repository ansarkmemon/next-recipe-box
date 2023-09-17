import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("body > ", await req.json());

  return NextResponse.json({ message: "user added" });
}
