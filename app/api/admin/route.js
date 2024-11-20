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

export async function POST(request) {
    try {
        const req = await request.json();
        const {title, slug, content} = req;

        const db = await createConnection();
        const query = `insert into blog (title, slug, content) values ('${title}', '${slug}', '${content}')`;
        const res = await db.query(query);
        return NextResponse.json({result: res, msg: 'success'});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: error.message});
    }
}