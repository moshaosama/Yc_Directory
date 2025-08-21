import { Params } from "next/dist/server/request/params";
import DB from "../../db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const Query = "SELECT * FROM start_up WHERE id = ?";
  const Value = [id];

  const [result] = await DB.query(Query, Value);

  return NextResponse.json(result);
}
