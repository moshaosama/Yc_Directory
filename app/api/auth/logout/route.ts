import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const cookieServer = await cookies();
  await cookieServer.delete("token");

  return NextResponse.json({
    status: 200,
    message: "Logout Successfully",
  });
}
