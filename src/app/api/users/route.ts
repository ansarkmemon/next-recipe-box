import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../node_modules/.prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  const { user } = await req.json();
  console.log("user > ", user);

  const existingUser = await prisma.user.findUnique({
    where: {
      id: user.user_id,
    },
  });

  let createdUser;

  if (!existingUser) {
    createdUser = await prisma.user.create({
      data: {
        id: user.user_id,
        name: user.name,
        email: user.email,
        userId: user.user_id,
        familyName: user.family_name,
        givenName: user.given_name,
        picture: user.picture,
      },
    });
  }

  return NextResponse.json({ message: "user added", data: createdUser });
}
