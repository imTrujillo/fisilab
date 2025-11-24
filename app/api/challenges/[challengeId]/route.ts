import db from "@/db/drizzle";
import { challenges } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ challengeId: string }> }
) {
  const { challengeId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const data = await db.query.challenges.findFirst({
    where: eq(challenges.id, id),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ challengeId: string }> }
) {
  const { challengeId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const body = await req.json();

  const data = await db
    .update(challenges)
    .set(body)
    .where(eq(challenges.id, id))
    .returning();

  return NextResponse.json(data[0] ?? null);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ challengeId: string }> }
) {
  const { challengeId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const data = await db
    .delete(challenges)
    .where(eq(challenges.id, id))
    .returning();

  return NextResponse.json(data[0] ?? null);
}
