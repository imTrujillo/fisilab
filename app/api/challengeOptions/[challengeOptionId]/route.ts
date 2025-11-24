import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ challengeOptionId: string }> }
) {
  const { challengeOptionId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeOptionId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const data = await db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, id),
  });

  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  context: { params: Promise<{ challengeOptionId: string }> }
) {
  const { challengeOptionId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeOptionId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const body = await req.json();

  const data = await db
    .update(challengeOptions)
    .set(body)
    .where(eq(challengeOptions.id, id))
    .returning();

  return NextResponse.json(data[0] ?? null);
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ challengeOptionId: string }> }
) {
  const { challengeOptionId } = await context.params;

  const isAdmin = await getIsAdmin();
  if (!isAdmin) return new NextResponse("Unauthorized", { status: 403 });

  const id = Number(challengeOptionId);
  if (isNaN(id)) return new NextResponse("Invalid id", { status: 400 });

  const data = await db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, id))
    .returning();

  return NextResponse.json(data[0] ?? null);
}
