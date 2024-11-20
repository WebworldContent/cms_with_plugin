import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { slug } = await params;
    const db = await createConnection();
    const [data] = await db.query('SELECT * FROM blog WHERE slug = ?', [slug]);

    return NextResponse.json({ data });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
