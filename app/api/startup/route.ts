import { NextResponse } from "next/server";
import DB from "../db";

export async function GET(request: Request) {
  const Query = "SELECT * FROM start_up";
  const [result] = await DB.promise().query(Query);

  return NextResponse.json(result);
}
