import { createConnection } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const query = 'select * from blog';
        const [data] = await db.query(query);

        return NextResponse.json({data})
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message});
    }
}
