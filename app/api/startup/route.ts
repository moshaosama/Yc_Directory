import { NextResponse } from "next/server";
import DB from "../db";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
    const [result] = await DB.query("SELECT * FROM start_up");
    return NextResponse.json(result);
}

export async function POST(request: Request) {
    const body = await request.json();
    const { title, category, description, image } = body;

    // Parse token from cookie
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json({
            status: 401,
            message: "Unauthorized: No token found",
        });
    }

    let decoded, user;
    try {
        decoded = jwt.verify(token, "SECRETPASSWORDTOKEN");

        const getUserQuery = "SELECT * FROM user WHERE email = ?";
        const [users] = await DB.query(getUserQuery, [decoded.email]);

        if (!users || users.length === 0) {
            return NextResponse.json({
                status: 404,
                message: "User not found",
            });
        }

        user = users[0];
    } catch (err) {
        return NextResponse.json({
            status: 401,
            message: "Invalid or expired token",
        });
    }

    const query = `
        INSERT INTO start_up (date, name, tag, description, image_url, view, user_id)
        VALUES (NOW(), ?, ?, ?, ?, 0, ?)
    `;
    const values = [title, category, description, image, user.id];
    await DB.query(query, values);

    return NextResponse.json({
        status: 200,
        message: "Created successfully",
        userId: user.id,
    });
}