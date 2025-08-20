import DB from "@/app/api/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, email, password } = body;

        if (!email || !password) {
            return NextResponse.json({
                status: 400,
                message: "Please enter your data",
            });
        }

        const PasswordCryption = await bcrypt.hash(password, 12);

        const Query = "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
        const Value = [username, email, PasswordCryption];

        await DB.promise().query(Query, Value);

        return NextResponse.json({
            status: 200,
            message: "Created user successfully"
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({
            status: 500,
            message: "Server error"
        });
    }
}