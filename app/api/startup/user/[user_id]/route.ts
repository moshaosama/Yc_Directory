import { Params } from "next/dist/server/request/params";
import DB from "../../../db";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { user_id: number } }
) {
    const { user_id } = params;
    const Query = "SELECT * FROM start_up WHERE user_id = ?";
    const Value = [user_id];

    const [result] = await DB.query(Query, Value);

    return NextResponse.json(result);
}
