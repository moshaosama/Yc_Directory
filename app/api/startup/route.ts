import { NextResponse } from "next/server";
import DB from "../db";

export async function GET(request: Request) {
  const Query = "SELECT * FROM start_up";
  const [result] = await DB.query(Query);

  return NextResponse.json(result);
}


export async function POST (request: Request) {
    const body = await request.json();
    const {title, category,description,image} = body;

    const createStartUpQuery = "INSERT INTO start_up (name, tag, description,image_url) VALUES (?, ?, ?,?)";
    const Values= [title, category, description, image];

    await DB.query(createStartUpQuery, Values);

    return NextResponse.json({
        status: 200,
        message: "Created succesfully"
    })
}